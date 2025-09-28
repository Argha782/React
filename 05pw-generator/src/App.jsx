import { useState, useCallback, useEffect, useRef } from "react";


function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (character) str += "~`!@#$%^&*";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, character, setPassword]);

  const copyPwToClipboard= useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator();
  }, [length, number, character, passwordGenerator]);
  return (
    <div className="flex flex-col items-center w-full h-screen bg-black p-10">
      <div className="flex flex-col items-center justify-center h-[20vh] bg-slate-700 w-1/3 rounded-3xl p-3">
        <h1 className="flex text-2xl font-bold text-white text-center ">
        Password Generator
      </h1>
        <div className="flex flex-row items-center justify-center w-full h-full">
          <input
            type="text"
            value={password}
            placeholder="password"
            readOnly
            ref={passwordRef}
            className="py-1 px-3 bg-white flex rounded-s-xl items-center text-xl w-full"
          />
          <button
            onClick={copyPwToClipboard}
            className="py-1 px-3 bg-blue-600 flex rounded-e-xl items-center justify-center text-xl text-white"
            // onClick={passwordGenerator}
          >
            copy
          </button>
        </div>
        <div className="flex flex-row text-orange-400 w-full gap-10 justify-center text-lg">
          <div className="flex gap-2">
            <input
              type="range"
              min={6}
              max={12}
              value={length}
              className="flex"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="flex">Length: {length}</label>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="numberInput"
              defaultChecked={number}
              className="flex"
              onChange={() => setNumber((prev) => !prev)}
            />
            <label className="flex">Numbers</label>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="characterInput"
              defaultChecked={character}
              className="flex"
              onChange={() => setCharacter((prev) => !prev)}
            />
            <label className="flex">Character</label>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;

