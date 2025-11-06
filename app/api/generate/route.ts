import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const POST = async (req: NextRequest) => {
    const { summary } = await req.json();
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `
        response: Орж ирсэн article-г монгол хэл дээр хураангуйлан max length нь 200 summary-гаар гаргана уу.
        article: ${summary}
        `,
    });

    console.log(response.text);
    return NextResponse.json({ message: response.text }, { status: 200 });
}
