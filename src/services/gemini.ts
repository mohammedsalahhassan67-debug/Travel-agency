import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.warn("GEMINI_API_KEY is not defined. AI features will not work.");
}

export const ai = new GoogleGenAI({ apiKey: apiKey || "" });

export const MODELS = {
  flash: "gemini-3-flash-preview",
  pro: "gemini-3.1-pro-preview",
};

export async function generateUniversityMatching(formData: any) {
  try {
    const response = await ai.models.generateContent({
      model: MODELS.flash,
      contents: `You are an expert university consultant for students wanting to study in Malaysia.
Based on the following student profile, suggest 3-5 Malaysian universities and explain why they are a good fit.
Include details like estimated tuition, campus vibe, and notable programs.

Student Profile:
${JSON.stringify(formData, null, 2)}

Return the response in a clear, encouraging format suitable for a student dashboard.`,
    });
    return response.text;
  } catch (error) {
    console.error("Error matching universities:", error);
    return "I'm having trouble matching universities right now. Please try again later.";
  }
}

export async function generateMotivationLetter(details: any) {
  try {
    const response = await ai.models.generateContent({
      model: MODELS.flash,
      contents: `Draft a professional motivation letter for a student applying to a Malaysian university.
Details:
- University: ${details.university}
- Program: ${details.program}
- Student Background: ${details.background}
- Career Goals: ${details.goals}

The letter should be persuasive, follow standard academic application conventions, and highlight為什麼 (why) Malaysia is the chosen destination.`,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating letter:", error);
    return "Failed to generate motivation letter.";
  }
}

export async function chatAssistant(message: string, history: { role: string; parts: { text: string }[] }[]) {
  try {
    const chat = ai.chats.create({
      model: MODELS.flash,
      config: {
        systemInstruction: "You are EduMalaysia Assistant, a friendly and helpful AI expert on studying in Malaysia. You help students with university choices, visa requirements (EMGS), cost of living, culture, and application steps. Be concise but informative.",
      },
      history: history,
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Assistant error:", error);
    return "I'm sorry, I'm experiencing some technical difficulties. How else can I help you today?";
  }
}
