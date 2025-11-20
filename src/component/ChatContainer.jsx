'use client';

import React, { useState, useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

import { 
  createConversation,
  sendMessageToConversation,
  getConversationMessages
} from "../services/chatService";

export default function ChatContainer() {
  const [messages, setMessages] = useState([]);
  const [conversationId, setConversationId] = useState(null);
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // =====================================================
  // HANDLE SENDING MESSAGE (FIXED VERSION)
  // =====================================================
  const handleSendMessage = async (text) => {
    // STEP 1: Add user message instantly FIRST
    const userMsg = {
      id: Date.now(),
      role: "user",
      content: text,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, userMsg]);

    // STEP 2: Set loading state AFTER user message is rendered
    setTimeout(() => {
      setLoading(true);
    }, 10);

    // STEP 3: If conversation not created → create it now
    let newConversationId = conversationId;
    if (!newConversationId) {
      const res = await createConversation();
      newConversationId = res.conversation.id;
      setConversationId(newConversationId);
    }

    // STEP 4: Send message to backend
    try {
      const res = await sendMessageToConversation(newConversationId, text);

      const botMsg = {
        id: res.assistantResponse.id,
        role: "assistant",
        content: res.assistantResponse.content,
        timestamp: new Date().toLocaleTimeString(),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      const errorMsg = {
        id: Date.now(),
        role: "assistant",
        content: "Server error. Please try again.",
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prev) => [...prev, errorMsg]);
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col h-screen">

      {/* Header – Full Width */}
      <div className="primary-bg text-white px-12 py-4 shadow w-full fixed top-0 left-0 z-20 ">
        <h1 className="text-xl font-bold">AI Chatbot</h1>
        <p className="text-blue-100">{loading ? "Typing..." : "Online"}</p>
      </div>

      {/* Chat Body – Centered 50% width on large screens */}
      <div className="flex flex-col flex-1 w-full lg:w-1/2 mx-auto bg-white py-20">

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6">
          {messages.map((msg) => (
            <ChatMessage
              key={msg.id}
              isUser={msg.role === "user"}
              message={msg.content}
              timestamp={msg.timestamp}
            />
          ))}

          {loading && (
            <ChatMessage isUser={false} message="Typing..." />
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input – Bottom */}
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 
                w-full lg:w-1/2 bg-white z-20">

          <ChatInput onSendMessage={handleSendMessage} />
        </div>

      </div>
    </div>
  );
}