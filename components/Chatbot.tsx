'use client';

import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import Button from './Button';
import { Locale, getTranslation } from '@/lib/i18n';

interface ChatbotProps {
  locale: Locale;
}

const Chatbot: React.FC<ChatbotProps> = ({ locale }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean; timestamp: Date }>>([]);
  const [isTyping, setIsTyping] = useState(false);
  const t = getTranslation(locale);

  const handleQuickReply = (reply: string) => {
    setMessages(prev => [...prev, { text: reply, isUser: true, timestamp: new Date() }]);
    setIsTyping(true);
    // Simulate bot response
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { 
        text: 'Thank you for your question! Our team will get back to you soon with detailed information.', 
        isUser: false, 
        timestamp: new Date() 
      }]);
    }, 1500);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages(prev => [...prev, { text: message, isUser: true, timestamp: new Date() }]);
      setMessage('');
      setIsTyping(true);
      // Simulate bot response
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, { 
          text: 'Thank you for your message! Our team will get back to you soon with a personalized response.', 
          isUser: false, 
          timestamp: new Date() 
        }]);
      }, 1500);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 group">
        {/* Notification Badge */}
        {!isOpen && messages.length === 0 && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
        )}
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full p-4 shadow-2xl hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-110 group-hover:rotate-12"
        >
          {isOpen ? (
            <X className="w-6 h-6 transition-transform duration-300" />
          ) : (
            <MessageCircle className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
          )}
        </button>
        
        {/* Tooltip */}
        {!isOpen && (
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-black text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            {t.chatbot.title}
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
          </div>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 flex flex-col animate-slide-up overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4 rounded-t-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full blur-sm"></div>
              <div className="absolute bottom-2 left-2 w-6 h-6 bg-white rounded-full blur-sm"></div>
            </div>
            
            <div className="flex items-center space-x-3 relative z-10">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{t.chatbot.title}</h3>
                <p className="text-white/80 text-sm">We're here to help!</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50/50 scrollbar-thin">
            {messages.length === 0 && (
              <div className="space-y-3 animate-fade-in">
                {/* Welcome Message */}
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-red-600" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-sm p-3 shadow-sm border border-gray-100 max-w-xs">
                    <p className="text-sm text-gray-800">Hi! I'm here to help you with any questions about GoElectricLove. What would you like to know?</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 font-medium px-2">Quick replies:</p>
                  {t.chatbot.quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="block w-full text-left p-3 text-sm bg-white hover:bg-red-50 rounded-xl transition-all duration-200 border border-gray-100 hover:border-red-200 hover:shadow-sm transform hover:scale-[1.02]"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="text-red-600 mr-2">•</span>
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {messages.map((msg, index) => (
              <div 
                key={index}
                className={`flex items-start space-x-3 animate-fade-in ${msg.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.isUser ? 'bg-red-600' : 'bg-red-100'
                }`}>
                  {msg.isUser ? (
                    <User className="w-5 h-5 text-white" />
                  ) : (
                    <Bot className="w-5 h-5 text-red-600" />
                  )}
                </div>
                <div className={`rounded-2xl p-3 shadow-sm border max-w-xs ${
                  msg.isUser 
                    ? 'bg-red-600 text-white rounded-tr-sm border-red-600' 
                    : 'bg-white text-gray-800 rounded-tl-sm border-gray-100'
                }`}>
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                  <p className={`text-xs mt-1 ${msg.isUser ? 'text-red-100' : 'text-gray-400'}`}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-start space-x-3 animate-fade-in">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-5 h-5 text-red-600" />
                </div>
                <div className="bg-white rounded-2xl rounded-tl-sm p-3 shadow-sm border border-gray-100">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-100 bg-white rounded-b-2xl">
            <div className="flex space-x-3 items-end">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.chatbot.placeholder}
                className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none transition-all duration-200 bg-gray-50 focus:bg-white"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!message.trim() || isTyping}
                className="bg-red-600 hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white p-3 rounded-xl transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100 shadow-lg hover:shadow-red-500/25"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            
            {/* Powered by */}
            <div className="flex items-center justify-center mt-3 pt-2 border-t border-gray-100">
              <p className="text-xs text-gray-400 flex items-center space-x-1">
                <span>Powered by</span>
                <span className="font-semibold text-red-600">GoElectricLove AI</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;