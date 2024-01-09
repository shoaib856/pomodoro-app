import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Setting } from "../../utils/interfaces";
import { getLocalVal, setLocalVal } from "../../utils/localStorage";

const initialState: Setting = {
  pomodoro: (getLocalVal("pomodoro") as number) || 25,
  shortBreak: (getLocalVal("short break") as number) || 5,
  longBreak: (getLocalVal("long break") as number) || 10,
  font: (getLocalVal("font") as string) || "font-kumbh-sans",
};

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    update: (
      state,
      action: PayloadAction<{
        type: "pomodoro" | "short break" | "long break";
        val: number;
      }>
    ) => {
      switch (action.payload.type) {
        case "pomodoro":
          return {
            ...state,
            pomodoro: action.payload.val,
          };
        case "short break":
          return {
            ...state,
            shortBreak: action.payload.val,
          };
        case "long break":
          return {
            ...state,
            longBreak: action.payload.val,
          };
        default:
          return state;
      }
    },
    updateFont: (state, action) => {
      return { ...state, font: action.payload };
    },
    apply: (state) => {
      setLocalVal("pomodoro", state.pomodoro);
      setLocalVal("short break", state.shortBreak);
      setLocalVal("long break", state.longBreak);
      setLocalVal("font", state.font);
    },
    resetSetting: () => initialState,
  },
});

export const { apply, update, updateFont ,resetSetting} = settingSlice.actions;
export default settingSlice.reducer;
