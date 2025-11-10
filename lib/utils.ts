import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function parseJsonBlock(input: string) {
  // Remove ```json and ``` (with optional whitespace or newlines)
  const cleaned = input.replace(/```json\s*([\s\S]*?)\s*```/, "$1").trim();

  // Parse the cleaned string into an object
  try {
    return JSON.parse(cleaned);
  } catch (err) {
    console.error("Invalid JSON:", err);
    return null;
  }
}
// from this data i need make this js object using function that removes
// json using regex and json parse to return object