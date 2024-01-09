import { useSelector } from "react-redux";
import { RootState } from "../utils/interfaces";

export const useGetShortBreakValues = () => {
  const timer = useSelector((state: RootState) => state.ShortBreak);
  return timer;
};
