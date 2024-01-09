import { useSelector } from "react-redux";
import { RootState } from "../utils/interfaces";

export const useGetControllerValues = () => {
  const controller = useSelector((state: RootState) => state.Controller);
  return controller;
};
