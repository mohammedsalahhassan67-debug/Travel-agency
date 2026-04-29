import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Coffee, Map, Wallet, Plane, Heart, Briefcase } from "lucide-react";

export default function Guide() {
  const guides = [
    {
      icon: <Wallet className="h-6 w-6" />, 
      title: "Cost of Living",
      content: "Malaysia is highly affordable. An average student needs between RM 1,500 to RM 2,500 ($350 - $600 USD) per month covering accommodation, food, and transport."
    },
    {
      icon: <Coffee className="h-6 w-6" />, 
      title: "Culture & Food",
      content: "A multicultural melting pot of Malay, Chinese, Indian, and indigenous cultures. From street-side Mamak stalls to high-end dining, the food scene is world-famous."
    },
    {
      icon: <Map className="h-6 w-6" />, 
      title: "Weather & Geography",
      content: "Tropical climate year-round (25°C - 32°C). Kuala Lumpur is the modern hub, but beautiful beaches in Langkawi and rainforests in Borneo are just a flight away."
    },
    {
      icon: <Plane className="h-6 w-6" />, 
      title: "Visa Requirements",
      content: "International students must apply for a Student Pass via EMGS. Most universities handle this process for you once you receive an offer."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Ultimate Malaysia <span className="text-primary italic">Student Guide</span></h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {guides.map((item, i) => (
            <Card key={i} className="border-none bg-muted/50">
              <CardHeader>
                <div className="mb-2 text-primary">{item.icon}</div>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <Accordion className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Can I work while studying in Malaysia?</AccordionTrigger>
            <AccordionContent>
              Yes, international students are allowed to work part-time for a maximum of 20 hours per week during semester breaks or holidays of more than 7 days.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is English widely spoken?</AccordionTrigger>
            <AccordionContent>
              Absolutely. English is extensively used in business, education, and social circles. Most university courses are taught in English.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How do I find accommodation?</AccordionTrigger>
            <AccordionContent>
              Most universities offer on-campus hostels. Alternatively, platforms like Speedhome or iProperty are popular for finding off-campus apartments.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
