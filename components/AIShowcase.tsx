import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';
import { useTranslation } from '../App';

const AIShowcase: React.FC = () => {
  const { lang } = useTranslation();
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
    <section id="neural-ai" className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-20 items-center">
        <div className="lg:col-span-5 reveal">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-red-600 mb-6 italic">Innovation</p>
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-10 leading-[0.9] text-[#0f172a]">NEURAL <br /><span className="text-slate-300">CORE</span></h2>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest leading-loose max-w-sm">
            {lang === 'vi' ? 'Trí tuệ nhân tạo độc quyền, thấu hiểu mọi yêu cầu kỹ thuật và vận hành iCafe đỉnh cao.' : 'Exclusive AI intelligence, understanding all technical and high-end iCafe operation requirements.'}
          </p>
        </div>
        
        <div className="lg:col-span-7 reveal">
          <div className="bg-slate-50/50 rounded-[3rem] border border-slate-100 p-2 overflow-hidden shadow-2xl shadow-slate-200/50">
            <div className="bg-white rounded-[2.5rem] flex flex-col h-[550px] relative">
              <div className="px-10 py-6 border-b border-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">Core Active</span>
                </div>
              </div>

              <div ref={scrollRef} className="flex-1 overflow-y-auto p-10 space-y-10 scrollbar-hide">
                {messages.length === 0 && (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
                    </div>
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{lang === 'vi' ? 'Khởi tạo hội thoại...' : 'Initiating conversation...'}</p>
                  </div>
                )}
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-6 rounded-2xl text-[11px] font-bold tracking-tight leading-relaxed ${msg.role === 'user' ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-600'}`}>
                      {msg.content}
                    </div>
                  </div>
                ))}
                {isTyping && <div className="flex justify-start"><div className="bg-slate-50 px-4 py-2 rounded-full text-[10px] font-bold text-slate-300 animate-pulse">Thinking...</div></div>}
              </div>

              <div className="p-6">
                <div className="relative group">
                  <input 
                    type="text" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()} 
                    placeholder={lang === 'vi' ? 'TRUY VẤN DỮ LIỆU...' : 'QUERY DATA...'} 
                    className="w-full bg-slate-50 border border-slate-100 rounded-full px-8 py-5 text-[11px] font-black uppercase tracking-widest outline-none focus:bg-white focus:border-red-600/30 transition-all text-[#0f172a] placeholder:text-slate-300 shadow-inner"
                  />
                  <button onClick={handleSend} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIShowcase;