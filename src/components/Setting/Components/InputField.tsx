import arrowUp from "../../../assets/icons/icon-arrow-up.svg";
import arrowDown from "../../../assets/icons/icon-arrow-down.svg";
import { ChangeEvent, FocusEventHandler, memo, useState } from "react";
import { useDispatch } from "react-redux";
import { update } from "../../../redux/reducers/Setting.Slice";

const InputField = memo(
  ({
    defaultVal,
    label,
  }: {
    defaultVal: number;
    label: "pomodoro" | "short break" | "long break";
  }) => {
    const dispatch = useDispatch();

    const [val, setVal] = useState<number>(defaultVal);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      const val = e.currentTarget.value;
      if (+val > 99) {
        setVal(99);
        dispatch(update({ type: label, val: 99 }));
      } else if (+val < 1) {
        setVal(1);
        dispatch(update({ type: label, val: 1 }));
      } else {
        setVal(+val);
        dispatch(update({ type: label, val: +val }));
      }
    };
    const onFocus: FocusEventHandler<HTMLInputElement> = (e) => {
      e.target.select();
    };

    return (
      <label className="form-control min-w-[140px]">
        <div className="label">
          <span className="text-b2 text-mirage opacity-40">{label}</span>
        </div>
        <div className="relative flex">
          <input
            type="number"
            value={val}
            onChange={onChange}
            onFocus={onFocus}
            min={1}
            max={99}
            className="input text-b1 text-mirage input-bordered min-w-[140px] rounded-[10px] h-12 bg-porcelain"
          />
          <div className="absolute h-5 top-1/2 -translate-y-1/2 flex flex-col justify-between right-4">
            <Button {...{ setVal, val }} />
            <Button {...{ setVal, val }} decrease />
          </div>
        </div>
      </label>
    );
  }
);

export default InputField;

const Button = ({
  setVal,
  val,
  decrease,
}: {
  setVal: React.Dispatch<React.SetStateAction<number>>;
  val: number;
  decrease?: boolean;
}) => {
  const handleIncrease = () => setVal((prev) => ++prev);
  const handleDecrease = () => setVal((prev) => (prev > 0 ? --prev : prev));

  return (
    <button
      onClick={decrease ? handleDecrease : handleIncrease}
      disabled={decrease && val <= 0}
      className="opacity-25 hover:opacity-100 transition-opacity disabled:opacity-25 disabled:cursor-not-allowed"
    >
      <img src={decrease ? arrowDown : arrowUp} alt="" />
    </button>
  );
};
