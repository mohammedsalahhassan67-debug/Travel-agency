import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { motion, AnimatePresence } from "motion/react";
import { chatAssistant } from "../services/gemini";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function Assistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I'm your EduMalaysia Guide. Ask me anything about studying in Malaysia, universities, or visa processes!" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMsg }]);
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.content }]
    }));

    const response = await chatAssistant(userMsg, history);
    
    setMessages(prev => [...prev, { role: "assistant", content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 h-[500px] w-[350px] overflow-hidden rounded-sm border border-slate-200 bg-white shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b bg-slate-900 p-4 text-white">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-primary rounded-sm flex items-center justify-center text-[10px] font-bold">◈</div>
                <span className="font-bold uppercase tracking-widest text-xs">AI Assistant Online</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:opacity-80">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Chat Area */}
            <ScrollArea className="flex-1 p-4 bg-[#F8FAFC]">
              <div className="space-y-4">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`flex max-w-[85%] gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                      <div className={`rounded-sm px-4 py-2 text-xs shadow-sm border ${msg.role === "user" ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-700 border-slate-200"}`}>
                        {msg.content}
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="flex items-center gap-2 rounded-sm bg-blue-50 border border-blue-100 px-4 py-2 text-[10px] font-bold text-blue-700 uppercase tracking-widest">
                      <Loader2 className="h-3 w-3 animate-spin" />
                      <span>Thinking...</span>
                    </div>
                  </div>
                )}
                <div ref={scrollRef} />
              </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="border-t p-4 bg-white">
              <form
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex gap-2"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your question..."
                  className="flex-1 rounded-sm border-slate-200 bg-slate-50 px-4 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary border"
                />
                <Button type="submit" size="icon" className="rounded-sm bg-slate-900" disabled={isLoading}>
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        size="icon"
        className="h-14 w-14 rounded-sm shadow-xl bg-slate-900 hover:bg-primary transition-all duration-300 transform rotate-45 flex items-center justify-center p-0"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="transform -rotate-45">
          {isOpen ? <X className="h-6 w-6 text-white" /> : <MessageCircle className="h-6 w-6 text-white" />}
        </div>
      </Button>
    </div>
  );
}
