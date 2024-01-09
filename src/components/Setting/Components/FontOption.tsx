import { MouseEventHandler } from "react";

const FontOption = ({
  font,
}: {
  font: "kumbh-sans" | "roboto-slab" | "space-mono";
}) => {
  const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    const html = document.querySelector("html");
    html?.classList.add(`font-${e.currentTarget.title}`);
  };

  return (
    <button
      title={font}
      {...{ onClick }}
      className={`flex place-content-center place-items-center aria-selected:text-white text-ebonyClay/[0.7297] rounded-full border-[1.5px] border-transparent hover:border-porcelain p-[3.5px]`}
    >
      <span
        className={`${
          font === "kumbh-sans"
            ? "font-kumbh-sans"
            : font === "roboto-slab"
            ? "font-roboto-slab"
            : "font-space-mono"
        } font-bold shrink-0 w-10 h-10 flex place-content-center place-items-center aria-selected:bg-mirage bg-porcelain rounded-full`}
      >
        Aa
      </span>
    </button>
  );
};

export default FontOption;
