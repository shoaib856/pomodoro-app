/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useGetSettingValues } from "../Hooks/useGetSettingValues";
import { useCallback, useMemo } from "react";
import { get } from "../utils/modesProps";

const CircularProgress = ({
  children,
  selected,
}: {
  children: React.ReactNode;
  selected: number;
}) => {
  const { pomodoro, longBreak, shortBreak } = useGetSettingValues();
  const initialValues = useMemo(
    () => [pomodoro, shortBreak, longBreak],
    [pomodoro, shortBreak, longBreak]
  );
  const { min, sec } = get[selected]();

  const progress = useCallback(() => {
    if (min === 0 && sec === 0) return 100;
    else {
      return ((min * 60 + sec) / (initialValues[selected] * 60)) * 100;
    }
  }, [min, sec, selected, initialValues]);
  return (
    <div
      className="radial-progress text-pallet-bittersweet"
      role="progressbar"
      style={{
        //@ts-ignore
        "--value": progress(),
        "--size": "340px",
        "--thickness": "10px",
      }}
    >
      <div className="flex flex-col gap-10 z-10">{children}</div>
    </div>
  );
};

export default CircularProgress;
