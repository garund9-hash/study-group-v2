import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export const getGeminiModel = (modelName = "gemini-1.5-flash") => {
  return genAI.getGenerativeModel({ model: modelName });
};
