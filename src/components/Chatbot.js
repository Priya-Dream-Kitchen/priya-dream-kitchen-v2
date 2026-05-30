'use client';

import { useState, useEffect, useRef } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: '👋 Hi! Welcome to Priya Dream Kitchen.<br>How can I help you today?',
      sender: 'bot',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const getBotReply = (input) => {
    const text = input.toLowerCase();
    if (text.includes('menu')) {
      return '🍽️ Our menu includes Sri Lankan rice & curries, kottu, roti, and more!';
    } else if (text.includes('location')) {
      return '📍 We’re located in Weligama, Sri Lanka (right in the town center, in front of Priya Dream Kitchen).';
    } else if (text.includes('time') || text.includes('hour')) {
      return '🕒 We’re open daily from 8:00 AM to 10:00 PM.';
    } else if (text.includes('contact') || text.includes('phone') || text.includes('number')) {
      return '📞 You can contact us at +94 74 241 7308 or message us on Whatsapp!';
    } else if (text.includes('thank')) {
      return "😊 You're most welcome! Hope to see you in our kitchen soon.";
    } else if (text.includes('hi') || text.includes('hello')) {
      return '👋 Hi! How can I help you today? Ask me about our menu, location, opening hours, or booking.';
    } else if (text.includes('whatsapp') || text.includes('wa.me')) {
      return '📞 Message us directly on Whatsapp: <a href="https://wa.me/94742417308" target="_blank" rel="noopener noreferrer" class="text-accent underline font-semibold">wa.me/+94742417308</a>';
    } else {
      return "🤔 Sorry, I'm not sure about that. Try asking about our 'menu', 'location', 'hours', or 'contact'.";
    }
  };

  const handleSendMessage = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    // Add user message
    setMessages((prev) => [...prev, { text: trimmed, sender: 'user' }]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      setIsTyping(false);
      const reply = getBotReply(trimmed);
      setMessages((prev) => [...prev, { text: reply, sender: 'bot' }]);
    }, 1000);
  };

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  return (
    <div className="font-sans group" style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9990 }}>
      
      {/* Floating Chat Button */}
      {!isOpen && (
        <div className="relative">
          {/* Tooltip */}
          <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-surface text-text text-xs font-semibold rounded-lg shadow-md border border-border-color/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            Ask Priya 🍳
          </span>

          <button
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 bg-primary hover:bg-accent text-white rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(198,123,92,0.35)] transition-all duration-300 hover:scale-110 active:scale-95 border border-white/10 relative"
            aria-label="Open Chat Help"
          >
            {/* Pulsing online status indicator dot */}
            <span className="absolute top-0.5 right-0.5 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500 border-2 border-primary"></span>
            </span>

            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>
        </div>
      )}

      {/* Slide-Up Chat Drawer */}
      <div
        className={`glass-panel w-[320px] sm:w-[360px] h-[450px] rounded-[24px] border border-border-color shadow-2xl flex flex-col overflow-hidden transition-all duration-500 ease-out transform ${
          isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-90 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="px-5 py-4 bg-primary text-white flex items-center justify-between shadow-md">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">
              🍳
            </div>
            <div>
              <h3 className="font-serif font-bold text-sm tracking-wide">Priya's Assistant</h3>
              <span className="text-[10px] text-white/80 block">Active • Online</span>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-white/15 rounded-full text-white/90 hover:text-white transition-all"
            aria-label="Close Chat"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Message Panel */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-surface/30 backdrop-blur-sm">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                dangerouslySetInnerHTML={{ __html: msg.text }}
                className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-primary text-white rounded-br-none shadow-md'
                    : 'bg-surface border border-border-color/60 text-text rounded-bl-none shadow-sm'
                }`}
              />
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-surface border border-border-color/60 text-text px-4 py-3 rounded-2xl rounded-bl-none shadow-sm flex gap-1 items-center">
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Input Panel */}
        <div className="p-3 border-t border-border-color/40 bg-surface/85 flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2.5 rounded-xl border border-border-color bg-surface/40 text-text placeholder-text-muted/60 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent transition-all"
          />
          <button
            onClick={handleSendMessage}
            className="p-2.5 bg-primary hover:bg-accent text-white rounded-xl shadow-md transition-colors duration-200"
            aria-label="Send message"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
