'use client';

import React, { useState, useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

import { 
  createConversation,
  sendMessageToConversation,
} from "../services/chatService";

export default function ChatContainer() {
  const [messages, setMessages] = useState([]);
  const [conversationId, setConversationId] = useState(null);
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);
  const previousMessagesRef = useRef([]);

  // Scroll only when new message added (NOT when typing input)
  useEffect(() => {
    if (messages.length > previousMessagesRef.current.length) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    previousMessagesRef.current = messages;
  }, [messages]);

  // =====================================================
  // SEND MESSAGE
  // =====================================================
  const formatAssistantResponse = (content) => {
  // Remove source citations like 【66:1†source】
  let cleanContent = content.replace(/【\d+:\d+†source】/g, '');
  
  return cleanContent;
  };
  const handleSendMessage = async (text) => {
    // STEP 1: Add user message instantly FIRST
    if (loading) return; // Prevent sending if already loading
    setLoading(true);
    const userMsg = {
      id: Date.now(),
      role: "user",
      content: text,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, userMsg]);

    // STEP 2: Set loading state AFTER user message is rendered
    // setTimeout(() => {
    //   setLoading(true);
    // }, 10);

    let newConversationId = conversationId;

    if (!newConversationId) {
      const res = await createConversation();
      newConversationId = res.conversation.id;
      setConversationId(newConversationId);
    }

    try {
      const res = await sendMessageToConversation(newConversationId, text);

      const formattedContent = formatAssistantResponse(res.assistantResponse.content);

      const botMsg = {
        id: res.assistantResponse.id,
        role: "assistant",
        content: formattedContent,
        timestamp: new Date().toLocaleTimeString(),
        isFormatted: true // Add this flag
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          role: "assistant",
          content: "Server error. Please try again.",
          timestamp: new Date().toLocaleTimeString(),
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col h-screen bg-white">

      {/* Header fixed */}
      <div className="primary-bg text-white px-12 py-4 shadow w-full fixed top-0 left-0 z-20">
        <h1 className="text-xl font-bold">AI Chatbot</h1>
        <p className="text-blue-100">{loading ? "Typing..." : "Online"}</p>
      </div>

      {/* Chat Body – centered */}
      <div className="flex flex-col flex-1 w-full lg:w-1/2 mx-auto pt-24 pb-28">

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
      </div>

      {/* Fixed bottom input centered */}
      <div
        className="fixed bottom-0 left-1/2 transform -translate-x-1/2 
                   w-full lg:w-1/2 z-30 px-4">
        <ChatInput onSendMessage={handleSendMessage} />
      </div>

    </div>
  );
}
