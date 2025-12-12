"use client";

export default function EmailField({
  email,
  onEmailChange,
  label = "Email",
  inputClassName = "",
}) {
  return (
    <div className="w-full">
      <label className="block text-white text-sm mb-2">
        {label}
      </label>

      <input
        type="email"
        value={email}
        onChange={(e) => onEmailChange(e.target.value)}
        className={`w-full bg-transparent border border-white px-4 text-white focus:outline-none ${inputClassName}`}
      />
    </div>
  );
}
