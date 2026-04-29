import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Sparkles, GraduationCap, ClipboardList, FileText, Loader2, Send, CheckCircle2 } from "lucide-react";
import { generateUniversityMatching, generateMotivationLetter } from "../services/gemini";
import Markdown from "react-markdown";

export default function Portal() {
  const [profile, setProfile] = useState({
    background: "",
    interests: "",
    budget: "",
    level: "Undergraduate"
  });
  const [matchingResult, setMatchingResult] = useState("");
  const [isMatching, setIsMatching] = useState(false);

  const [letterDetails, setLetterDetails] = useState({
    university: "",
    program: "",
    background: "",
    goals: ""
  });
  const [letterResult, setLetterResult] = useState("");
  const [isGeneratingLetter, setIsGeneratingLetter] = useState(false);

  const handleMatch = async () => {
    setIsMatching(true);
    const result = await generateUniversityMatching(profile);
    setMatchingResult(result);
    setIsMatching(false);
  };

  const handleLetter = async () => {
    setIsGeneratingLetter(true);
    const result = await generateMotivationLetter(letterDetails);
    setLetterResult(result);
    setIsGeneratingLetter(false);
  };

  return (
    <div className="container mx-auto px-4 py-24 min-h-screen">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Student Portal</h1>
        <p className="text-muted-foreground">Manage your journey and use AI to accelerate your application.</p>
      </div>

      <Tabs defaultValue="matching" className="space-y-8">
        <TabsList className="grid w-full grid-cols-3 md:w-[600px]">
          <TabsTrigger value="matching" className="flex items-center gap-2">
            <Sparkles className="h-4 w-4" /> University Matcher
          </TabsTrigger>
          <TabsTrigger value="letter" className="flex items-center gap-2">
            <FileText className="h-4 w-4" /> Letter Writer
          </TabsTrigger>
          <TabsTrigger value="checklist" className="flex items-center gap-2">
            <ClipboardList className="h-4 w-4" /> Application Status
          </TabsTrigger>
        </TabsList>

        <TabsContent value="matching">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle>AI University Matcher</CardTitle>
                <CardDescription>Tell us about yourself and Gemini will recommend the best fit in Malaysia.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Academic Background</label>
                  <Input 
                    placeholder="e.g. Completed High School with GPA 3.8/4.0" 
                    value={profile.background}
                    onChange={(e) => setProfile({...profile, background: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Interests & Major</label>
                  <Input 
                    placeholder="e.g. Computer Science, Artificial Intelligence" 
                    value={profile.interests}
                    onChange={(e) => setProfile({...profile, interests: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Estimated Yearly Budget (USD)</label>
                  <Input 
                    placeholder="e.g. $5,000 - $8,000" 
                    value={profile.budget}
                    onChange={(e) => setProfile({...profile, budget: e.target.value})}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleMatch} disabled={isMatching} className="w-full h-12">
                  {isMatching ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Matching...</> : <><Sparkles className="mr-2 h-4 w-4" /> Get AI Recommendations</>}
                </Button>
              </CardFooter>
            </Card>

            <div className="bg-muted/30 rounded-3xl p-8 border min-h-[300px]">
              {matchingResult ? (
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  <Markdown>{matchingResult}</Markdown>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center text-muted-foreground">
                  <Sparkles className="h-12 w-12 mb-4 opacity-20" />
                  <p>Your personalized recommendations will appear here.</p>
                </div>
              )}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="letter">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle>Motivation Letter Generator</CardTitle>
                <CardDescription>Generate a professional letter tailored to your dream university.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Target University</label>
                    <Input 
                      placeholder="e.g. Universiti Malaya" 
                      value={letterDetails.university}
                      onChange={(e) => setLetterDetails({...letterDetails, university: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Chosen Program</label>
                    <Input 
                      placeholder="e.g. B.Sc in IT" 
                      value={letterDetails.program}
                      onChange={(e) => setLetterDetails({...letterDetails, program: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Personal Background</label>
                  <textarea 
                    className="w-full flex min-h-[100px] rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Briefly describe your achievements and background..."
                    value={letterDetails.background}
                    onChange={(e) => setLetterDetails({...letterDetails, background: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Career Goals</label>
                  <textarea 
                    className="w-full flex min-h-[100px] rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="What do you want to achieve after graduation?"
                    value={letterDetails.goals}
                    onChange={(e) => setLetterDetails({...letterDetails, goals: e.target.value})}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleLetter} disabled={isGeneratingLetter} className="w-full h-12">
                  {isGeneratingLetter ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Drafting...</> : <><FileText className="mr-2 h-4 w-4" /> Generate Letter</>}
                </Button>
              </CardFooter>
            </Card>

            <div className="bg-muted/30 rounded-3xl p-8 border min-h-[300px]">
              {letterResult ? (
                <div className="prose prose-sm dark:prose-invert max-w-none">
                   <div className="flex justify-end mb-4">
                     <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(letterResult)}>Copy to Clipboard</Button>
                   </div>
                  <Markdown>{letterResult}</Markdown>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center text-muted-foreground">
                  <FileText className="h-12 w-12 mb-4 opacity-20" />
                  <p>Your motivation letter will be drafted here.</p>
                </div>
              )}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="checklist">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Application Progress</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                   <div className="flex items-center gap-4 opacity-50">
                      <div className="h-8 w-8 rounded-full bg-border flex items-center justify-center text-muted-foreground">1</div>
                      <div className="flex-1">
                        <p className="font-semibold">Submit Application</p>
                        <p className="text-xs text-muted-foreground">University Review Pending</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-4 opacity-50">
                      <div className="h-8 w-8 rounded-full bg-border flex items-center justify-center text-muted-foreground">2</div>
                      <div className="flex-1">
                        <p className="font-semibold">Visa eVAL Application</p>
                        <p className="text-xs text-muted-foreground">Locked</p>
                      </div>
                   </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Upload New Documents</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Missing Documents</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                   <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-500" /> Passport Copy
                   </div>
                   <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-500" /> IELTS Results
                   </div>
                   <div className="flex items-center gap-2 text-sm text-destructive">
                      <div className="h-4 w-4 rounded-full border border-destructive" /> Financial Statement
                   </div>
                </CardContent>
              </Card>
           </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
