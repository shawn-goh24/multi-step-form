import React from "react";

export default function FormInput({ value, label, placeholder, onChange }) {
  return (
    <div className="flex flex-col space-y-2">
      <label>{label}</label>
      <input
        value={value}
        required
        type={
          label === "Email Address"
            ? "email"
            : label === "Name"
            ? "text"
            : "number"
        }
        placeholder={placeholder}
        className="border-2 border-gray-500 rounded-lg h-12 px-4"
        onChange={onChange}
      />
    </div>
  );
}
