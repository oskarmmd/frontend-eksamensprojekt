"use client";

import { useState } from "react";
import EmailField from "../reuse/EmailField";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const [message, setMessage] = useState("");
  const [type, setType] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setType(null);

    if (!name.trim()) {
      setMessage("Indtast venligst dit navn.");
      setType("error");
      return;
    }

    if (!email.trim()) {
      setMessage("Indtast venligst din e-mail.");
      setType("error");
      return;
    }

    if (!comment.trim()) {
      setMessage("Indtast venligst en besked.");
      setType("error");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:4000/contact_messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message: comment,
        }),
      });

      if (!res.ok) throw new Error();

      setMessage("Tak for din besked! Vi vender tilbage hurtigst muligt.");
      setType("success");

      setName("");
      setEmail("");
      setComment("");
    } catch {
      setMessage("Noget gik galt. Prøv venligst igen senere.");
      setType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-black py-20">
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto px-6 space-y-8">
        {/* NAME */}
        <div>
          <label className="block text-white mb-3 text-sm">Your Name</label>
          <div className="border border-white">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-transparent px-4 py-3 text-white focus:outline-none" />
          </div>
        </div>

        <EmailField email={email} onEmailChange={setEmail} message={type === "error" ? message : ""} type={type} inputClassName="h-[3.2rem]" />

        <div>
          <label className="block text-white mb-3 text-sm">Your Comment</label>
          <div className="border border-white">
            <textarea rows="6" value={comment} onChange={(e) => setComment(e.target.value)} className="w-full bg-transparent px-4 py-3 text-white focus:outline-none resize-none" />
          </div>
        </div>

        {type === "success" && <p className="text-emerald-400 text-sm">{message}</p>}

        <div className="flex flex-col items-center mt-10">
          <div className="h-px w-40 bg-white mb-4" />
          <button
            type="submit"
            disabled={loading}
            className={`tracking-[0.25em] uppercase text-white text-sm transition
              ${loading ? "opacity-60 cursor-not-allowed" : "hover:text-(--pink)"}`}
          >
            {loading ? "SENDER…" : "SEND"}
          </button>
          <div className="h-px w-40 bg-white mt-4" />
        </div>
      </form>
    </section>
  );
}
