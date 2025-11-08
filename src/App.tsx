import { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<string | number>("");

  const handleClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      // Replace × and ÷ with * and / for JS eval
      const expression = input.replace(/×/g, "*").replace(/÷/g, "/");
      const calcResult = eval(expression);
      setResult(calcResult);
    } catch {
      setResult("Error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-72">
        <div className="text-right mb-4">
          <div className="text-gray-400 text-sm">{input || "0"}</div>
          <div className="text-2xl font-semibold">{result || ""}</div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {["7", "8", "9", "÷",
            "4", "5", "6", "×",
            "1", "2", "3", "-",
            "0", ".", "=", "+"].map((btn) => (
            <button
              key={btn}
              onClick={() => (btn === "=" ? handleCalculate() : handleClick(btn))}
              className={`p-4 rounded-xl font-semibold ${
                btn === "="
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              {btn}
            </button>
          ))}

          <button
            onClick={handleClear}
            className="col-span-4 bg-red-600 hover:bg-red-700 p-3 rounded-xl font-semibold mt-2"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
