import { useSelector } from "react-redux";
import { RootState } from "../utils/interfaces";

export const useGetPomodoroValues = () => {
  const timer = useSelector((state: RootState) => state.Pomodoro);
  return timer;
};
