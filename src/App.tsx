import { useState } from "react";

import Button from "@/components/ui/button";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="grid min-h-screen place-content-center bg-slate-900 text-slate-100">
      <div className="container flex flex-col justify-center">
        <div className="mx-auto flex flex-row">
          <a href="https://vitejs.dev" target="_blank">
            <img
              src={viteLogo}
              className="block h-40 p-6 transition-[filter] duration-300 hover:drop-shadow-[0_0_2rem_#646cffaa]"
              alt="Vite logo"
            />
          </a>
          <a href="https://react.dev" target="_blank">
            <img
              src={reactLogo}
              className="block h-40 p-6 transition-[filter] duration-300 hover:drop-shadow-[0_0_2rem_#61dafbaa]"
              alt="React logo"
            />
          </a>
        </div>
        <h1 className="mb-12 mt-8 text-center text-5xl font-semibold leading-tight">
          Vite + React
        </h1>
        <div className="card flex flex-col justify-center">
          <Button
            className="mx-auto mb-6 w-auto px-12 py-6 text-lg"
            variant="secondary"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </Button>
          <p className="text-normal mb-8 text-center font-light">
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="text-center text-sm text-slate-500">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </main>
  );
}

export default App;
