import { useState } from "react";
import "./App.css";
import data from "../data.json";
import jeremy from "./assets/image-jeremy.png";
import Card from "./components/Card";
import { Timeframe } from "./types";
import { backgrounds } from "./utils";

function App() {
  const [period, setPeriod] = useState("weekly");

  const handleClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    setPeriod((e.target as HTMLButtonElement).innerText.toLowerCase());
  };

  return (
    <main className="min-h-svh grid place-content-center">
      <div className="grid items-center justify-center gap-8 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
        <section className="bg-dark-blue max-w-[360px] rounded-2xl lg:row-span-2 lg:h-full">
          <div className="bg-light-violet p-6 flex gap-4 rounded-2xl lg:flex-col lg:gap-10 lg:p-8">
            <img
              src={jeremy}
              alt="Jeremy Robson profile"
              className="w-16 h-16 rounded-[50%] outline-[3px] outline outline-white"
            />
            <div className="flex flex-col lg:mb-10">
              <span className="text-pale-blue">Report for</span>
              <span className="text-white text-2xl font-light lg:text-4xl">
                Jeremy Robson
              </span>
            </div>
          </div>
          <div className="text-desaturated-blue p-6 flex justify-between lg:flex-col lg:gap-4 lg:p-8">
            <button
              className={`${
                period === "daily" ? "text-white" : ""
              } text-start hover:text-white hover:cursor-pointer`}
              onClick={handleClick}
            >
              Daily
            </button>
            <button
              className={`${
                period === "weekly" ? "text-white" : ""
              } text-start hover:text-white hover:cursor-pointer`}
              onClick={handleClick}
            >
              Weekly
            </button>
            <button
              className={`${
                period === "monthly" ? "text-white" : ""
              } text-start hover:text-white hover:cursor-pointer`}
              onClick={handleClick}
            >
              Monthly
            </button>
          </div>
        </section>
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
