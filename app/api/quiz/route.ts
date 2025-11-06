import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const POST = async (req: NextRequest) => {
    const { summary } = await req.json();
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Generate 5 multiple choice questions based on this article: ${summary}. Return the response in this exact JSON format:
      [
        {
          "question": "Question text here",
          "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
          "answer": "0"
        }
      ]
      Make sure the response is valid JSON and the answer is the index (0-3) of the correct option.`
    });
    console.log(response.text);
    return NextResponse.json({ message: response.text }, { status: 200 });
}
