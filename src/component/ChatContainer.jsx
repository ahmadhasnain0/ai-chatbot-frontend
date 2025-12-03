'use client';

import React, { useState, useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import { ArrowLeft } from "lucide-react";


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
  const formatAssistantResponse = (content) => {
  // Remove source citations
  let cleanContent = content.replace(/【\d+:\d+†source】/g, '');
// Normalize unicode versions of m/e/c
cleanContent = cleanContent
  // full-width lowercase
  .replace(/ｍ/g, "m")
  .replace(/ｅ/g, "e")
  .replace(/ｃ/g, "c") // full-width c

  // full-width uppercase
  .replace(/Ｍ/g, "M")
  .replace(/Ｅ/g, "E")
  .replace(/Ｃ/g, "C")

  // Cyrillic small
  .replace(/с/g, "c") // Cyrillic c (small)

  // Cyrillic capital
  .replace(/Е/g, "E") // Cyrillic E (capital)
  .replace(/С/g, "C"); // Cyrillic C (capital)

  // Replace whole word "mec" ONLY (not inside other words)
  cleanContent = cleanContent.replace(/(?<![A-Za-z0-9])mec(?![A-Za-z0-9])/gi, (match) => {
  const map = {
    "mec": "ahu",
    "MEC": "AHU",
    "Mec": "Ahu",
    "mEc": "aHu",
    "meC": "ahU",
    "MeC": "AhU",
    "mEC": "aHU"
  };
  return map[match] || match;
});
// Normalize unicode variants for Middle East College
cleanContent = cleanContent
  // FULL-WIDTH → normal
  .replace(/[Ｍｍ]/g, m => (m === "Ｍ" ? "M" : "m"))
  .replace(/[Ｉｉ]/g, i => (i === "Ｉ" ? "I" : "i"))
  .replace(/[Ｄｄ]/g, d => (d === "Ｄ" ? "D" : "d"))
  .replace(/[Ｌｌ]/g, l => (l === "Ｌ" ? "L" : "l"))
  .replace(/[Ｅｅ]/g, e => (e === "Ｅ" ? "E" : "e"))
  .replace(/[Ａａ]/g, a => (a === "Ａ" ? "A" : "a"))
  .replace(/[Ｓｓ]/g, s => (s === "Ｓ" ? "S" : "s"))
  .replace(/[Ｔｔ]/g, t => (t === "Ｔ" ? "T" : "t"))
  .replace(/[Ｃｃ]/g, c => (c === "Ｃ" ? "C" : "c"))
  .replace(/[Ｏｏ]/g, o => (o === "Ｏ" ? "O" : "o"))
  .replace(/[Ｇｇ]/g, g => (g === "Ｇ" ? "G" : "g"))

  // Cyrillic to normal
  .replace(/[С]/g, "C")
  .replace(/[с]/g, "c")
  .replace(/[Е]/g, "E")
  .replace(/[е]/g, "e")
  .replace(/[О]/g, "O")
  .replace(/[о]/g, "o");
  // Convert “quoted text” to **bold text**
  cleanContent = cleanContent.replace(/\bMiddle East College\b/g, 'Atlas Highest University');
  cleanContent = cleanContent.replace(/\bmiddle east college\b/g, 'atlas highest university');
  cleanContent = cleanContent.replace(/\bMIDDLE EAST COLLEGE\b/g, 'ATLAS HIGHEST UNIVERSITY');
  cleanContent = cleanContent.replace(/[“”](.*?)[“”]/g, '**$1**'); 
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
<div className="primary-bg text-white px-12 py-4 shadow w-full fixed top-0 left-0 z-20 flex items-center gap-6">
      
      {/* Back Button */}
      <button
        onClick={() => window.history.back()}
        className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center transition hover:bg-gray-200 cursor-pointer"
      >
        <ArrowLeft size={20} />
      </button>

      <div>
        <h1 className="text-xl font-bold">AI Chatbot</h1>
        <p className="text-blue-100">{loading ? "Typing..." : "Online"}</p>
      </div>

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
              isFormatted={msg.isFormatted}
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

          <ChatInput onSendMessage={handleSendMessage}
      disabled={loading}
      placeholder={loading ? "AI is responding..." : "Type your message..." } />
        </div>

      </div>
    </div>
  );
}