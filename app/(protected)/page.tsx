
export default function Home() {
  return (
    <div className="flex flex-col gap-2">

      <h1 className="text-2xl font-bold">Article Quiz Generator</h1>
      <p>Paste your article below to generate a summarize and quiz question. Your articles will saved in the sidebar for future reference.</p>

      <p>Article Title</p>
      <input type="text" className="border-2 w-full p-2 rounded-lg" />

      <p>Article Content</p>
      <textarea className="border-2 w-full h-64 p-2 rounded-lg" />
    </div>
  );
}
