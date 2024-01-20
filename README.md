# Google-Gemini-Pro

## Introduction

Welcome to Google-Gemini-Pro, a project that harnesses the power of Google's Generative AI for creative endeavors.

## Getting Started

Follow these steps to set up and use Google Generative AI in your project:

1. **Get API Key**: Visit [https://ai.google.dev](https://ai.google.dev) to obtain your API key.

2. **Install Dependencies**: Install the required packages using npm. Make sure you have [dotenv](https://www.npmjs.com/package/dotenv) installed.

   ```bash
   npm install dotenv @google/generative-ai
   ```

3. **Initialize dotenv**: Create a `.env` file in the root of your project and add your API key:

   ```dotenv
   API_KEY=your_google_api_key
   ```

4. **Initialize the Generative Model**: In your project, initialize the generative model using the provided package.

   Example code:

   ```javascript
   import dotenv from "dotenv";
   import { GoogleGenerativeAI } from "@google/generative-ai";
   // Initialize dotenv
   dotenv.config();
   const genAI = new GoogleGenerativeAI(process.env.API_KEY);
   const model = genAI.getGenerativeModel({ model: "gemini-pro" });
   ```

5. **Start Generating Creativity**:
   - Now that your setup is complete, you can use the `generativeAI` instance to explore the capabilities of Google's Generative AI in your project.

## Example Usage

```javascript
// Asynchronous function to generate content
async function FirstGPT(model, prompt) {
  try {
    const result = await model.generateContent(prompt);
    const text = await result.response.text();
    fs.appendFile(`EXAMPLE.txt`, text, "utf-8", (err) => {
      if (err) throw err;
      console.log("Task COMPLETED");
    });
  } catch (error) {
    console.log(error);
  }
}

// Run The Code Here
FirstGPT(model, "Write a random blog");
```

This ensures that you're calling the `FirstGPT` function with the correct arguments.
