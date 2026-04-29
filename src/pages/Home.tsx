import { Button, buttonVariants } from "../components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Search, GraduationCap, MapPin, CheckCircle, ArrowRight, Sparkles, Globe, ShieldCheck } from "lucide-react";
import UniversityCard from "../components/UniversityCard";
import { UNIVERSITIES } from "../constants/universities";
import { cn } from "../lib/utils";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col md:flex-row border-b border-slate-200">
        <div className="flex-1 p-10 md:p-20 flex flex-col justify-center border-r border-slate-200">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-[0.2em] mb-8 rounded-sm">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              Powered by Gemini AI Studio
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[1.05] text-slate-900 mb-8 tracking-tighter">
              Your Academic <br/>Journey Starts <br/>in <span className="text-primary italic underline decoration-8 underline-offset-12">Malaysia.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-md leading-relaxed mb-10">
              Get a personalized university roadmap and document assistance with our integrated Google AI Studio matching engine.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/portal" 
                className={cn(buttonVariants({ size: "lg" }), "rounded-sm px-8 h-14 text-sm font-black tracking-widest uppercase flex items-center gap-2")}
              >
                Start AI Analysis <ArrowRight className="h-4 w-4" />
              </Link>
              <Link 
                to="/universities" 
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-sm px-8 h-14 text-sm font-bold tracking-widest uppercase flex items-center justify-center")}
              >
                Universities
              </Link>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-16 flex items-center gap-8 text-slate-400"
            >
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-900 tracking-tighter">20+</span>
                <span className="text-[10px] font-bold uppercase tracking-widest">Institutions</span>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-900 tracking-tighter">150k+</span>
                <span className="text-[10px] font-bold uppercase tracking-widest">Students</span>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-900 tracking-tighter">#25</span>
                <span className="text-[10px] font-bold uppercase tracking-widest">Global Rank</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="flex-1 bg-slate-100 relative overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=2070&auto=format&fit=crop" 
            alt="Kuala Lumpur"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
        </div>
      </section>

      {/* Featured Universities */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Top-Tier Institutions</h2>
              <p className="text-muted-foreground max-w-2xl">
                From prestigious public research universities to innovative private campuses, Malaysia offers diverse options for every academic goal.
              </p>
            </div>
            <Link 
              to="/universities" 
              className={cn(buttonVariants({ variant: "outline" }), "rounded-full flex items-center justify-center")}
            >
              View All Universities
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {UNIVERSITIES.slice(0, 3).map((uni, idx) => (
              <motion.div
                key={uni.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <UniversityCard university={uni} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Malaysia Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">Why Choose Malaysia?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <Globe className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Multicultural Hub</h3>
                    <p className="text-muted-foreground">A melting pot of cultures, offering a rich social experience and a global mindset for students.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <Search className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Affordable Excellence</h3>
                    <p className="text-muted-foreground">Get a world-class degree at a fraction of the cost in the US or UK, with very low cost of living.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Safe & Stable</h3>
                    <p className="text-muted-foreground">Voted as one of the safest countries for international students with friendly locals and modern infrastructure.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=2070&auto=format&fit=crop" 
                alt="Students in Malaysia" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="h-12 w-12 mx-auto mb-6 text-primary-foreground/80" />
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Confused? Let Our AI Help.</h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
              Submit your academic background and goals, and our Gemini-powered engine will curate a personalized list of universities and programs just for you.
            </p>
            <Link 
              to="/portal" 
              className={cn(buttonVariants({ size: "lg", variant: "secondary" }), "rounded-full px-10 h-14 text-lg flex items-center justify-center mx-auto")}
            >
              Try AI University Matcher
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function Badge({ children, variant = "default", className = "" }: { children: React.ReactNode, variant?: string, className?: string }) {
  const variants: Record<string, string> = {
    default: "bg-primary text-primary-foreground",
    outline: "border border-input bg-background",
    secondary: "bg-secondary text-secondary-foreground"
  };
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}

