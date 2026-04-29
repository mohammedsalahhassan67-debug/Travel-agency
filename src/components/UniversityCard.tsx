import { University } from "../constants/universities";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "./ui/button";
import { MapPin, GraduationCap, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

interface UniversityCardProps {
  university: University;
}

export default function UniversityCard({ university }: UniversityCardProps) {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-xl border-slate-200 rounded-lg bg-white">
      <div className="relative h-48 overflow-hidden">
        <img
          src={university.image}
          alt={university.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge variant={university.type === "Public" ? "secondary" : "default"} className="font-bold shadow-sm rounded-sm uppercase tracking-tighter text-[10px]">
            {university.type}
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-2 relative">
        <div className={`h-1 absolute top-0 left-6 w-12 ${university.id === 'um' ? 'bg-blue-600' : 'bg-teal-500'}`} />
        <div className="flex items-start justify-between pt-2">
          <CardTitle className="text-xl font-black tracking-tight leading-tight group-hover:text-primary transition-colors">
            {university.name}
          </CardTitle>
        </div>
        <CardDescription className="flex items-center gap-1">
          <MapPin className="h-3 w-3" /> {university.location}, Malaysia
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {university.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {university.programs.slice(0, 3).map((prog) => (
            <Badge key={prog} variant="secondary" className="text-[10px] uppercase font-bold tracking-wider">
              {prog}
            </Badge>
          ))}
          {university.programs.length > 3 && (
            <Badge variant="outline" className="text-[10px]">+{university.programs.length - 3} more</Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-0 flex gap-2">
        <Link 
          to={`/universities?id=${university.id}`} 
          className={cn(buttonVariants({ variant: "default" }), "flex-1 group items-center justify-center gap-2")}
        >
          View Details <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
        <a 
          href={university.website} 
          target="_blank" 
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
        >
          <GraduationCap className="h-4 w-4" />
        </a>
      </CardFooter>
    </Card>
  );
}
