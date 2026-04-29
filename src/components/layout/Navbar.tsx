import { Link } from "react-router-dom";
import { Button, buttonVariants } from "../ui/button";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Discover", path: "/universities" },
    { name: "Malaysia Guide", path: "/guide" },
    { name: "Apply Now", path: "/apply" },
    { name: "Student Portal", path: "/portal" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex h-20 items-center justify-between">
          <div class="flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-sm transform rotate-45 flex items-center justify-center">
                <div className="w-4 h-4 bg-white transform -rotate-45"></div>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-800 uppercase">
                EduMalaysia <span className="text-primary italic">Connect</span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8 uppercase tracking-[0.2em] text-[10px] font-bold">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-muted-foreground transition-colors hover:text-primary border-b-2 border-transparent hover:border-primary pb-1"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/portal" 
                className={cn(buttonVariants({ variant: "default", size: "sm" }), "rounded-sm px-6 py-2 h-10 font-black tracking-widest")}
              >
                LOGIN
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t bg-background"
          >
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-muted hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-3 pt-2">
                <Link 
                  to="/portal" 
                  onClick={() => setIsOpen(false)}
                  className={cn(buttonVariants({ variant: "default" }), "w-full flex justify-center")}
                >
                  Login / Register
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
