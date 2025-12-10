"use client";

export default function EmailField({
  email,
  onEmailChange,
  message,
  type,
  label = "Enter Your Email",
  labelClassName = "",
  inputClassName = "",
}) {
  return (
    <div className="w-full">
      <label className={`block text-white/80 mb-3 text-sm ${labelClassName}`}>
        {label}
      </label>

      <div className="border-b border-white/70">
        <input
          type="email"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          className={`w-full bg-transparent py-2 text-white focus:outline-none ${inputClassName}`}
        />
      </div>

      {message && (
        <p
          className={`mt-3 text-xs ${
            type === "error" ? "text-red-400" : "text-emerald-400"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
