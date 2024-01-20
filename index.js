import dotenv from "dotenv";
import fs from "fs";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize dotenv
dotenv.config();

// Initialize Google Generative AI with API key
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

// Asynchronous function to generate content ,create a new .txt file and write complete text here . 
async function FirstGPT(model, prompt) {
  try {
    const result = await model.generateContent(prompt);
    const text = await result.response.text();
    fs.appendFile(`EXAMPLE.txt`, text, "utf-8", (err) => {
      if (err) throw err;
      console.log("Task COMPLETED");
    });
  } catch (error) {
    console.log(error)
  }
}

// Run The Code Here
FirstGPT(model, "Write a random blog");
