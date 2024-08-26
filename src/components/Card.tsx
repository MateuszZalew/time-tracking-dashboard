import ellipsis from "../assets/icon-ellipsis.svg";

type CardProps = {
  title: string;
  timeframe: { current: number; previous: number };
  backgroundData: { color: string; image: string; alt: string };
};

export default function Card({ title, timeframe, backgroundData }: CardProps) {
  return (
    <section
      className={`${backgroundData.color} relative flex h-[154px] max-w-[360px] justify-end overflow-hidden rounded-2xl lg:h-[232px]`}
    >
      <img
        src={backgroundData.image}
        alt={backgroundData.alt}
        className="relative bottom-1 right-6 h-fit"
      />
      <div className="absolute top-8 w-full rounded-2xl bg-dark-blue p-6 text-white hover:cursor-pointer hover:bg-dark-blue-hover lg:top-12 lg:p-8">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button aria-label="Show more options" aria-disabled>
            <img src={ellipsis} alt="three dots" className="h-[5px]" />
          </button>
        </div>
        <div className="flex items-center justify-between lg:flex-col lg:items-start lg:gap-4">
          <p className="text-3xl font-light lg:text-5xl">
            {timeframe.current}hrs
          </p>
          <span className="text-pale-blue lg:text-sm">
            Last Week - {timeframe.previous}hrs
          </span>
        </div>
      </div>
    </section>
  );
}
