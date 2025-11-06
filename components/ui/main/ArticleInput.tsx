"use client"
import { useState } from "react"
import { Button } from "../button"
export type QuizItem = {
    question: string
    options: string[]
    answer: string
}

export const ArticleInput = () => {
    const [input, setInput] = useState("")
    const [response, setResponse] = useState("")
    const [title, setTitle] = useState("")
    const [step, setStep] = useState("1")
    const [quiz, setQuiz] = useState<QuizItem[]>([])


    const onSend = async () => {
        const response = await fetch("/api/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ summary: input }),
        })
        const data = await response.json();
        if (data) {
            setResponse(data.message);
        }
        console.log(data);
        setStep("2");
    }
    const OnTakeQuiz = async () => {
        const response = await fetch("/api/quiz", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ summary: input }),
        })
        const data = await response.json();

        if (data) {
            setQuiz(JSON.parse(data.message) as QuizItem[])
        }

        console.log(data);
        setStep("3");
    }
    if (step === "1") {
        return (
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-bold">Article Quiz Generator</h1>
                <p>Paste your article below to generate a summarize and quiz question. Your articles will saved in the sidebar for future reference.</p>

                <p>Article Title</p>
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    type="text"
                    className="border-2 w-full p-2 rounded-lg"
                />

                <p>Article Content</p>
                <textarea
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                    className="border-2 w-full h-64 p-2 rounded-lg"
                />

                <Button onClick={onSend} className="w-fit mt-4" disabled={!(title && input)}>
                    Generate summary
                </Button>
            </div>
        )
    }
    if (step === "2") {
        return (
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-bold">Article Quiz Generator</h1>
                <p>Summarized content</p>
                <h1 className="text-2xl font-bold">{title}</h1>
                {response && (
                    <div>
                        <p>{response}</p>
                    </div>
                )}
                <Button onClick={OnTakeQuiz} className="w-fit mt-4" disabled={!(title && input)}>
                    Take a Quiz
                </Button>
            </div>
        )
    }
    if (step === "3") {
        return (
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-bold">Quick test</h1>
                <p>Take a quick test about your knowledge from your content </p>


                <p>{quiz[0].question}</p>
                <p>{quiz[0].options[0]}</p>
                <p>{quiz[0].options[1]}</p>


                <Button onClick={OnTakeQuiz} className="w-fit mt-4" disabled={!(title && input)}>
                    Take a Quiz
                </Button>
            </div>
        )
    }
}


