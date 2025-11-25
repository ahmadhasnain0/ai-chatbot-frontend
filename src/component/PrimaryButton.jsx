import React from 'react';

export default function PrimaryButton({
  children,
  onClick,
  type = 'button',
  disabled = false,
  fullWidth = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${
        fullWidth ? 'w-full' : 'px-6'
      } py-3 primary-color text-white font-medium rounded-lg  focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer`}
    >
      {children}
    </button>
  );
}
