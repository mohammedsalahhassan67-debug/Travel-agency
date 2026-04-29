import { useState } from "react";
import { UNIVERSITIES, University } from "../constants/universities";
import UniversityCard from "../components/UniversityCard";
import { Input } from "../components/ui/input";
import { Search, Filter, X } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

export default function Universities() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const filtered = UNIVERSITIES.filter(uni => {
    const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         uni.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         uni.programs.some(p => p.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = !selectedType || uni.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="container mx-auto px-4 py-12 pt-24">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Discover Universities</h1>
        <p className="text-muted-foreground max-w-2xl">
          Explore Malaysia's top-ranked institutions. Filter by type, location, or study programs to find your ideal campus.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input 
            placeholder="Search by name, city, or program (e.g. Engineering)..." 
            className="pl-10 h-12 rounded-xl"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Button 
            variant={selectedType === "Public" ? "default" : "outline"} 
            className="rounded-xl h-12"
            onClick={() => setSelectedType(selectedType === "Public" ? null : "Public")}
          >
            Public
          </Button>
          <Button 
            variant={selectedType === "Private" ? "default" : "outline"} 
            className="rounded-xl h-12"
            onClick={() => setSelectedType(selectedType === "Private" ? null : "Private")}
          >
            Private
          </Button>
          {selectedType && (
            <Button variant="ghost" onClick={() => setSelectedType(null)} className="h-12">
              <X className="h-4 w-4 mr-2" /> Clear
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.length > 0 ? (
          filtered.map(uni => (
            <UniversityCard key={uni.id} university={uni} />
          ))
        ) : (
          <div className="col-span-full py-20 text-center">
            <p className="text-xl text-muted-foreground">No universities found matching your criteria.</p>
            <Button variant="link" onClick={() => { setSearchTerm(""); setSelectedType(null); }}>
              Reset all filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
