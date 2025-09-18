import { useState } from "react";

function App() {
  const [color, setColor] = useState("grey");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-row bg-white h-[10vh] p-2 bottom-12 inset-x-10 rounded-full gap-2 justify-evenly text-white font-bold shadow-2xl">
        <button
          className="rounded-full w-1/6 hover:scale-105"
          onClick={() => setColor("red")}
          style={{
            backgroundColor: "red",
          }}
        >
          TEST
        </button>
        <button
          className="rounded-full w-1/6 hover:scale-105"
          onClick={() => setColor("orange")}
          style={{
            backgroundColor: "orange",
          }}
        >
          TEST
        </button>
        <button
          className="rounded-full w-1/6 hover:scale-105"
          onClick={() => setColor("blue")}
          style={{
            backgroundColor: "blue",
          }}
        >
          TEST
        </button>
        <button
          className="rounded-full w-1/6 hover:scale-105"
          onClick={() => setColor("green")}
          style={{
            backgroundColor: "green",
          }}
        >
          TEST
        </button>
        <button
          className="rounded-full w-1/6 hover:bg-yellow-600 hover:scale-105"
          onClick={() => setColor("yellow")}
          style={{
            backgroundColor: "yellow",
          }}
        >
          TEST
        </button>
      </div>
    </div>
  );
}

export default App;
