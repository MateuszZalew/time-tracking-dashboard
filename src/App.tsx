import { useState } from "react";
import "./App.css";
import data from "../data.json";
import jeremy from "./assets/image-jeremy.png";
import Card from "./components/Card";
import { Timeframe } from "./types";
import { backgrounds } from "./utils";

function App() {
  const [period, setPeriod] = useState("weekly");

  const handleClick = (e) => {
    setPeriod(e.target.innerText.toLowerCase());
  };

  return (
    <main className="min-h-svh lg:grid-cols-4 lg:grid-rows-2">
      <div className="grid gap-8">
        <article className="bg-dark-blue max-w-[360px] rounded-2xl">
          <div className="bg-light-violet p-6 flex items-center gap-4 rounded-2xl">
            <img
              src={jeremy}
              alt=""
              className="w-16 h-16 rounded-[50%] outline-[3px] outline outline-white"
            />
            <div className="flex flex-col">
              <span className="text-pale-blue">Report for</span>
              <span className="text-white text-2xl font-light">
                Jeremy Robson
              </span>
            </div>
          </div>
          <div className="text-desaturated-blue px-6 py-6 flex justify-between  ">
            <span
              className="hover:text-white hover:cursor-pointer"
              onClick={handleClick}
            >
              Daily
            </span>
            <span
              className="hover:text-white hover:cursor-pointer"
              onClick={handleClick}
            >
              Weekly
            </span>
            <span
              className="hover:text-white hover:cursor-pointer"
              onClick={handleClick}
            >
              Monthly
            </span>
          </div>
        </article>
        {data.map(({ title, timeframes }, index) => (
          <Card
            key={title}
            title={title}
            timeframe={timeframes[period as keyof Timeframe]}
            backgroundData={backgrounds[index]}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
