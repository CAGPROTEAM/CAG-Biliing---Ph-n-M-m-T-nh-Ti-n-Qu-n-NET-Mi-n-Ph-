
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';
import { useTranslation } from '../App';

const AIShowcase: React.FC = () => {
  const { lang, t } = useTranslation();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsTyping(true);
    const response = await getGeminiResponse(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsTyping(false);
  };

  return (
    <section id="neural-ai" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-20 items-center">
        <div className="lg:col-span-5 reveal">
          <div className="inline-block px-3 py-1 bg-red-600/5 text-red-600 text-[10px] font-black uppercase tracking-widest mb-6 border border-red-100">CAG Neural Core</div>
          <h2 className="heading-tech text-4xl md:text-6xl font-bold uppercase mb-8 leading-[1.1] text-[#0f172a]">NEURAL <br /><span className="red-gradient-text italic">ENGINE</span></h2>
          <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10">
            {lang === 'vi' ? 'Trợ lý AI thấu hiểu mọi nghiệp vụ vận hành iCafe và kỹ thuật Bootrom Cloud.' : 'AI assistant for iCafe operations and Bootrom Cloud technical support.'}
          </p>
        </div>
        <div className="lg:col-span-7 reveal">
          <div className="rounded-[2rem] overflow-hidden border border-slate-200 flex flex-col h-[600px] relative bg-slate-50 shadow-2xl">
            <div className="bg-white px-8 py-4 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">System Online</span>
              </div>
            </div>
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-5 rounded-2xl text-sm font-semibold leading-relaxed ${msg.role === 'user' ? 'bg-red-600 text-white' : 'bg-white text-slate-700 border border-slate-200 shadow-sm'}`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isTyping && <div className="flex justify-start"><div className="bg-white p-4 rounded-xl animate-pulse border border-slate-200 shadow-sm">...</div></div>}
            </div>
            <div className="p-6 bg-white border-t border-slate-200">
              <div className="relative">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} placeholder={lang === 'vi' ? 'Hỏi tôi về CAG Pro...' : 'Ask about CAG Pro...'} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-sm font-semibold outline-none focus:border-red-600/50 transition-all text-[#0f172a]" />
                <button onClick={handleSend} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-red-600 hover:text-red-700">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIShowcase;
