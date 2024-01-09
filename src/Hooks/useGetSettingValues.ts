import { useSelector } from "react-redux";
import { RootState } from "../utils/interfaces";

export const useGetSettingValues = () => {
  const setting = useSelector((state: RootState) => state.Setting);
  return setting;
};
