import { GoogleGenerativeAI } from "@google/generative-ai";

if (!process.env.GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY is not set");
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

/**
 * Generates a contextual chat response for the Ujjwal Bhavishya portal.
 * The AI acts as a multilingual government schemes assistant.
 */
export async function generateChatResponse(
  prompt: string,
  language: string,
  history: Array<{ role: string; content: string }>
): Promise<string> {
  const systemContext = [
    "You are a helpful government schemes assistant for the Ujjwal Bhavishya portal.",
    "You help Indian citizens find, understand, and apply for government welfare schemes.",
    "Be concise, accurate, and empathetic.",
    language !== "en"
      ? `Respond in the user's preferred language (${language}).`
      : "",
  ]
    .filter(Boolean)
    .join(" ");

  const formattedHistory = history.map((msg) => ({
    role: msg.role === "assistant" ? "model" : "user",
    parts: [{ text: msg.content }],
  }));

  const chat = model.startChat({
    history: formattedHistory,
    generationConfig: {
      maxOutputTokens: 512,
    },
  });

  const fullPrompt = history.length === 0
    ? `${systemContext}\n\nUser: ${prompt}`
    : prompt;

  const result = await chat.sendMessage(fullPrompt);
  const response = result.response;

  return response.text();
}

/**
 * Translates text to the specified target language using Gemini.
 */
export async function translateText(
  text: string,
  targetLanguage: string
): Promise<string> {
  const prompt = `Translate the following text to ${targetLanguage}. Only return the translation, nothing else:\n\n${text}`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}
