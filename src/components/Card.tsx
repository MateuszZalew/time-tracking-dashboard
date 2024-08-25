import ellipsis from "../assets/icon-ellipsis.svg";

type CardProps = {
  title: string;
  timeframe: { current: number; previous: number };
  backgroundData: { color: string; image: string };
};

export default function Card({ title, timeframe, backgroundData }: CardProps) {
  return (
    <div
      className={`${backgroundData.color} min-h-[154px] rounded-2xl relative flex justify-end`}
    >
      <img src={backgroundData.image} alt="" className="h-fit" />
      <article className="bg-dark-blue p-6 text-white rounded-2xl absolute top-8 w-full">
        <div className="flex justify-between items-center mb-3">
          <span className="text-lg font-semibold">{title}</span>
          <img src={ellipsis} alt="" className="h-[5px]" />
        </div>
        <div className="flex justify-between items-center">
          <p className="text-3xl">{timeframe.current}hrs</p>
          <span className="text-pale-blue">
            Last Week - {timeframe.previous}hrs
          </span>
        </div>
      </article>
    </div>
  );
}
