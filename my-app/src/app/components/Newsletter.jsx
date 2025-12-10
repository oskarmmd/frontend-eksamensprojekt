// src/components/Newsletter.js
"use client";

import { useState } from "react";

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
            <span className="text-(--pink) font-semibold">Event</span>
          </p>
        </div>

        {/* ================= MOBILE (default) ================= */}
        <form onSubmit={handleSubmit} className="md:hidden">
          <div className="text-left text-sm text-white/80 mb-3">
            Enter Your Email
          </div>

          <div className="border-b border-white/70">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent py-2 text-white text-sm focus:outline-none"
            />
          </div>

          {message && (
            <p
              className={`mt-3 text-xs ${
                type === "error"
                  ? "text-red-400"
                  : "text-emerald-400"
              }`}
            >
              {message}
            </p>
          )}

          <div className="mt-10 space-y-3 text-center">
            <div className="h-px bg-white w-40 mx-auto" />
            <button
              type="submit"
              disabled={loading}
              className={`tracking-[0.25em] uppercase text-sm text-white transition
                ${
                  loading
                    ? "opacity-60 cursor-not-allowed"
                    : "hover:text-(--pink)"
                }`}
            >
              {loading ? "SENDER…" : "SUBSCRIBE"}
            </button>
            <div className="h-px bg-white w-40 mx-auto" />
          </div>
        </form>

        {/* ================= DESKTOP (md+) ================= */}
        <form
          onSubmit={handleSubmit}
          className="hidden md:flex items-end gap-12"
        >
          {/* LEFT */}
          <div className="w-full">
            <label className="block text-white/80 text-sm mb-3">
              Enter Your Email
            </label>
            <div className="border-b border-white/70">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent py-2 text-white text-base focus:outline-none"
              />
            </div>

            {message && (
              <p
                className={`mt-3 text-xs ${
                  type === "error"
                    ? "text-red-400"
                    : "text-emerald-400"
                }`}
              >
                {message}
              </p>
            )}
          </div>

          {/* RIGHT */}
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
