import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
dotenv.config();
// models/gemini-pro-vision model/gemini-pro
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

async function FirstGPT(model, prompt) {
  const result = await model.generateContent(prompt);
  const text = await result.response.text();
  console.log(text);
}
FirstGPT(model, "write a random blog for me.");
