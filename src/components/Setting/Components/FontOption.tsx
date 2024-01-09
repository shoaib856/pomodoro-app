import { useDispatch } from "react-redux";
import { updateFont } from "../../../redux/reducers/Setting.Slice";
import { useGetSettingValues } from "../../../Hooks/useGetSettingValues";

const FontOption = ({
  font,
}: {
  font: "kumbh-sans" | "roboto-slab" | "space-mono";
}) => {
  const { font: fontSelected } = useGetSettingValues();
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(updateFont(`font-${font}`));
    console.log(font, fontSelected);
  };

  return (
    <button
      aria-selected={`font-${font}` === fontSelected}
      title={font}
      {...{ onClick }}
      className={`transition flex place-content-center place-items-center aria-selected:text-white text-ebonyClay/[0.7297] rounded-full border-[1.5px] border-transparent hover:border-porcelain p-[3.5px]`}
    >
      <span
        aria-selected={`font-${font}` === fontSelected}
        className={`${
          font === "kumbh-sans"
            ? "font-kumbh-sans"
            : font === "roboto-slab"
            ? "font-roboto-slab"
            : "font-space-mono"
        } transition font-bold shrink-0 w-10 h-10 flex place-content-center place-items-center aria-selected:bg-mirage bg-porcelain rounded-full`}
      >
        Aa
      </span>
    </button>
  );
};

export default FontOption;
