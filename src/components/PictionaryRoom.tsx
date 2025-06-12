import { useEffect, useState } from "react";
import GameCanvas from "./PictionaryCanvas";

export default function PictionaryRoom() {
  const [word, setWord] = useState("...");
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/word`)
      .then((res) => res.json())
      .then((data) => setWord(data.word))
      .catch(() => setWord("sunflower")); // fallback
  }, []);

  const handleGuess = () => {
    if (guess.toLowerCase() === word.toLowerCase()) {
      setMessage("🎉 Correct!");
    } else {
      setMessage("❌ Try again!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-4">🎨 Pictionary Game</h1>
        <p className="text-center text-lg text-gray-700 mb-4">
          Word to Draw: <strong>{word}</strong>
        </p>
        <div className="flex justify-center mb-6">
          <GameCanvas />
        </div>
        <div className="flex flex-col items-center gap-4">
          <input
            type="text"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            placeholder="Type your guess..."
            className="w-72 px-4 py-2 border rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleGuess}
            className="bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700 transition"
          >
            Submit Guess
          </button>
          {message && (
            <p className="text-xl mt-2 font-medium text-gray-800">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
}
