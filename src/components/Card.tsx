import ellipsis from "../assets/icon-ellipsis.svg";

type CardProps = {
  title: string;
  timeframe: { current: number; previous: number };
  backgroundData: { color: string; image: string; alt: string };
};

export default function Card({ title, timeframe, backgroundData }: CardProps) {
  return (
    <div
      className={`${backgroundData.color} max-w-[360px] h-[154px] rounded-2xl relative flex justify-end overflow-hidden lg:h-[232px]`}
    >
      <img
        src={backgroundData.image}
        alt={backgroundData.alt}
        className="h-fit relative bottom-1 right-6"
      />
      <article className="bg-dark-blue p-6 text-white rounded-2xl absolute top-8 w-full lg:p-8 lg:top-12">
        <div className="flex justify-between items-center mb-3">
          <span className="text-lg font-semibold">{title}</span>
          <button aria-label="Show more options" aria-disabled>
            <img src={ellipsis} alt="three dots" className="h-[5px]" />
          </button>
        </div>
        <div className="flex justify-between items-center lg:flex-col lg:gap-4 lg:items-start">
          <p className="font-light text-3xl lg:text-5xl">
            {timeframe.current}hrs
          </p>
          <span className="text-pale-blue lg:text-sm">
            Last Week - {timeframe.previous}hrs
          </span>
        </div>
      </article>
    </div>
  );
}
