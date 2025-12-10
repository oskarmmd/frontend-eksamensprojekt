"use client";

import { useState } from "react";
import EmailField from "./EmailField";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setType(null);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      setMessage("Indtast venligst din e-mail.");
      setType("error");
      return;
    }

    if (!emailRegex.test(email)) {
      setMessage(
        "Indtast venligst en gyldig e-mail, så vi kan sende dig nyhedsbrevet."
      );
      setType("error");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:4000/newsletters", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error();

      setMessage("Tak! Du er nu tilmeldt Night Club’s nyhedsbrev.");
      setType("success");
      setEmail("");
    } catch {
      setMessage(
        "Noget gik galt ved tilmeldingen. Prøv venligst igen senere."
      );
      setType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-black py-20 mx-auto md:w-190">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-white tracking-[0.3em] text-sm md:text-base mb-4">
            WANT THE LATEST NIGHT CLUB NEWS
          </h2>
          <p className="text-white/90 text-sm md:text-base">
            Subscribe to our newsletter and never miss an{" "}
            <span className="text-[var(--pink)] font-semibold">Event</span>
          </p>
        </div>

        {/* ================= MOBILE ================= */}
        <form onSubmit={handleSubmit} className="md:hidden">
          <EmailField
            email={email}
            onEmailChange={setEmail}
            message={message}
            type={type}
            labelClassName="text-left"
            inputClassName="text-sm"
          />

          <div className="mt-10 space-y-3 text-center">
            <div className="h-px bg-white w-40 mx-auto" />
            <button
              type="submit"
              disabled={loading}
              className={`tracking-[0.25em] uppercase text-sm text-white transition
                ${
                  loading
                    ? "opacity-60 cursor-not-allowed"
                    : "hover:text-[var(--pink)]"
                }`}
            >
              {loading ? "SENDER…" : "SUBSCRIBE"}
            </button>
            <div className="h-px bg-white w-40 mx-auto" />
          </div>
        </form>

        {/* ================= DESKTOP ================= */}
        <form
          onSubmit={handleSubmit}
          className="hidden md:flex items-end gap-12"
        >
          <EmailField
            email={email}
            onEmailChange={setEmail}
            message={message}
            type={type}
            inputClassName="text-base"
          />

          <div className="flex flex-col items-center min-w-[220px]">
            <div className="h-px w-full bg-white mb-4" />
            <button
              type="submit"
              disabled={loading}
              className={`tracking-[0.25em] uppercase text-base text-white transition
                ${
                  loading
                    ? "opacity-60 cursor-not-allowed"
                    : "hover:text-(--pink)"
                }`}
            >
              {loading ? "SENDER…" : "SUBSCRIBE"}
            </button>
            <div className="h-px w-full bg-white mt-4" />
          </div>
        </form>
      </div>
    </section>
  );
}
