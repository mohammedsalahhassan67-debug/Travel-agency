import { CheckCircle, ArrowRight, FileText, Globe, GraduationCap, Banknote } from "lucide-react";
import { Button, buttonVariants } from "../components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

export default function Apply() {
  const steps = [
    {
      title: "Choose Your University",
      desc: "Use our AI Matcher or search tool to find the right fit for your budget and goals.",
      icon: <SearchIcon className="h-6 w-6" />
    },
    {
      title: "Submit Documents",
      desc: "Prepare your academic transcripts, passport copies, and English proficiency results (IELTS/TOEFL).",
      icon: <FileText className="h-6 w-6" />
    },
    {
      title: "Receive Offer Letter",
      desc: "Wait for the university to review your application and issue the VAL (Visa Approval Letter).",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      title: "Visa Approval (EMGS)",
      desc: "The university will apply for your Student Pass through Education Malaysia Global Services (EMGS).",
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: "Fly to Malaysia",
      desc: "Once your Visa is ready, book your flight and prepare for a new chapter!",
      icon: <CheckCircle className="h-6 w-6" />
    }
  ];

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Simple 5-Step Application</h1>
        <p className="text-xl text-muted-foreground">Navigating international study doesn't have to be hard. We've simplified the path for you.</p>
      </div>

      <div className="relative space-y-12 before:absolute before:left-8 before:top-2 before:h-[calc(100%-40px)] before:w-0.5 before:bg-border md:before:left-1/2">
        {steps.map((step, i) => (
          <div key={i} className={`flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            <div className="flex-1 hidden md:block" />
            <div className="z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg border-4 border-background">
              {step.icon}
            </div>
            <div className="flex-1 bg-muted/40 p-8 rounded-3xl border">
              <h3 className="text-xl font-bold mb-2">{i + 1}. {step.title}</h3>
              <p className="text-muted-foreground">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center bg-primary/5 p-12 rounded-[3rem] border border-primary/20">
        <h2 className="text-3xl font-bold mb-4">Ready to start?</h2>
        <p className="mb-8 text-muted-foreground">Join thousands of students who have started their journey with EduMalaysia.</p>
        <div className="flex justify-center gap-4">
          <Link 
            to="/portal" 
            className={cn(buttonVariants({ size: "lg" }), "rounded-full px-12 flex items-center justify-center h-12")}
          >
            Apply via Student Portal
          </Link>
        </div>
      </div>
    </div>
  );
}

function SearchIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
  );
}
