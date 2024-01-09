import { useSelector } from "react-redux";
import { RootState } from "../utils/interfaces";

export const useGetLongBreakValues = () => {
  const timer = useSelector((state: RootState) => state.LongBreak);
  return timer;
};
