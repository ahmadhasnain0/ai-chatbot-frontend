'use client';

import React, { useState } from 'react';

export default function ChatInput({ onSendMessage, disabled, placeholder }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white pb-4 pt-2"
    >
      <div className="flex items-center gap-2 flex-nowrap overflow-hidden">

        {/* Input */}
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={placeholder || "Type your message..."}
          className="
            flex-1 min-w-0
            px-3 py-3
            border border-gray-300 rounded-full
            focus:outline-none
            text-sm
          "
        />

        {/* Send Button */}
        <button
          type="submit"
          disabled={!message.trim() || disabled}
          className="
            px-5 py-3
            primary-color text-white font-medium
            rounded-full
            text-sm whitespace-nowrap
            focus:outline-none focus:ring-2
            transition-all duration-200
            disabled:opacity-50 disabled:cursor-not-allowed
          "
        >
          Send
        </button>

      </div>
    </form>
  );
}
