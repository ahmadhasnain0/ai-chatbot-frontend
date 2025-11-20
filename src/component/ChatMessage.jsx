import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function ChatMessage({ message, isUser, timestamp, isFormatted = false }) {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-[70%] rounded-2xl px-4 py-3 ${
          isUser
            ? 'primary-bg text-white rounded-br-sm'
            : 'bg-gray-200 text-gray-900 rounded-bl-sm'
        }`}
      >
        {isFormatted ? (
          <div className="whitespace-pre-wrap">
            <ReactMarkdown>{message}</ReactMarkdown>
          </div>
        ) : (
<p
            className={`${isUser ? "text-white" : "text-gray-900"} whitespace-pre-wrap break-words`}
          >
            {message}
          </p>        )}
        {timestamp && (
          <span className={`text-xs mt-1 block ${isUser ? 'text-blue-100' : 'text-gray-500'}`}>
            {timestamp}
          </span>
        )}
      </div>
    </div>
  );
}
