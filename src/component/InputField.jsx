import React from 'react';

export default function InputField({
  type,
  name, // ✅ Add this
  placeholder,
  value,
  onChange,
  onBlur, // ✅ Add this
  label,
  error, // ✅ Add this for error handling
}) {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name} // ✅ Add name attribute
        id={name} // ✅ Add id for label
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur} // ✅ Add onBlur
        className={`w-full px-4 py-3 bg-white border-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00456A] focus:border-[#00456A] transition-all duration-200 shadow-sm ${
          error ? 'border-red-500' : 'border-gray-400'
        }`}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}