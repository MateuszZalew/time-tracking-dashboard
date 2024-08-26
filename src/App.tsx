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
    <main className="grid min-h-svh place-content-center">
      <div className="grid items-center justify-center gap-8 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
        <section className="max-w-[360px] rounded-2xl bg-dark-blue lg:row-span-2 lg:h-full">
          <div className="flex gap-4 rounded-2xl bg-light-violet p-6 lg:flex-col lg:gap-10 lg:p-8">
            <img
              src={jeremy}
              alt="Jeremy Robson profile"
              className="h-16 w-16 rounded-[50%] outline outline-[3px] outline-white"
            />
            <div className="flex flex-col lg:mb-10">
              <span className="text-pale-blue">Report for</span>
              <h2 className="text-2xl font-light text-white lg:text-4xl">
                Jeremy Robson
              </h2>
            </div>
          </div>
          <div className="m-6 flex justify-between p-6 text-desaturated-blue lg:flex-col lg:gap-4 lg:p-8">
            <button
              className={`${
                period === "daily" ? "text-white" : ""
              } text-start hover:cursor-pointer hover:text-white`}
              onClick={handleClick}
            >
              Daily
            </button>
            <button
              className={`${
                period === "weekly" ? "text-white" : ""
              } text-start hover:cursor-pointer hover:text-white`}
              onClick={handleClick}
            >
              Weekly
            </button>
            <button
              className={`${
                period === "monthly" ? "text-white" : ""
              } text-start hover:cursor-pointer hover:text-white`}
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
