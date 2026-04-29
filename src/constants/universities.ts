export interface University {
  id: string;
  name: string;
  location: string;
  type: "Public" | "Private";
  ranking: number;
  programs: string[];
  image: string;
  description: string;
  website: string;
}

export const UNIVERSITIES: University[] = [
  {
    id: "um",
    name: "Universiti Malaya (UM)",
    location: "Kuala Lumpur",
    type: "Public",
    ranking: 65,
    programs: ["Medicine", "Engineering", "Law", "Business", "Arts"],
    image: "https://images.unsplash.com/photo-1541339907198-e08759df9a73?q=80&w=2070&auto=format&fit=crop",
    description: "The oldest and highest-ranking university in Malaysia, known for research excellence and a beautiful urban campus.",
    website: "https://www.um.edu.my",
  },
  {
    id: "upm",
    name: "Universiti Putra Malaysia (UPM)",
    location: "Serdang",
    type: "Public",
    ranking: 123,
    programs: ["Agriculture", "Forestry", "Veterinary Medicine", "Computer Science"],
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop",
    description: "A research-intensive university with a focus on agriculture and life sciences, boasting a green, expansive campus.",
    website: "https://www.upm.edu.my",
  },
  {
    id: "taylors",
    name: "Taylor's University",
    location: "Subang Jaya",
    type: "Private",
    ranking: 284,
    programs: ["Hospitality", "Business", "Design", "Architecture"],
    image: "https://images.unsplash.com/photo-1523050335392-93851179ae22?q=80&w=2070&auto=format&fit=crop",
    description: "A leading private university known for its modern Lakeside Campus and strong industry connections in hospitality and business.",
    website: "https://university.taylors.edu.my",
  },
  {
    id: "monash",
    name: "Monash University Malaysia",
    location: "Bandar Sunway",
    type: "Private",
    ranking: 42, // Global Monash ranking
    programs: ["Pharmacy", "Business", "Science", "IT"],
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=1974&auto=format&fit=crop",
    description: "The first international campus of Monash University Australia, offering a prestigious Australian education in Malaysia.",
    website: "https://www.monash.edu.my",
  },
  {
    id: "sunway",
    name: "Sunway University",
    location: "Bandar Sunway",
    type: "Private",
    ranking: 600,
    programs: ["Culinary Arts", "Actuarial Science", "Psychology"],
    image: "https://images.unsplash.com/photo-1525921429624-479b6a29d84c?q=80&w=2070&auto=format&fit=crop",
    description: "A young, vibrant university with a strong emphasis on sustainability and partnerships with Lancaster University.",
    website: "https://sunwayuniversity.edu.my",
  },
  {
    id: "utm",
    name: "Universiti Teknologi Malaysia (UTM)",
    location: "Johor Bahru / KL",
    type: "Public",
    ranking: 188,
    programs: ["Engineering", "Built Environment", "Geoinformation"],
    image: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop",
    description: "Specializes in engineering and technology, producing the highest number of engineering graduates in the country.",
    website: "https://www.utm.my",
  }
];
