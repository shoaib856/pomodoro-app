import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Setting } from "../../utils/interfaces";
import { getLocalVal, setLocalVal } from "../../utils/localStorage";

const initialState: Setting = {
  pomodoro: getLocalVal("pomodoro") || 25,
  shortBreak: getLocalVal("short break") || 5,
  longBreak: getLocalVal("long break") || 10,
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
    apply: (state) => {
      setLocalVal("pomodoro", state.pomodoro);
      setLocalVal("short break", state.shortBreak);
      setLocalVal("long break", state.longBreak);
    },
  },
});

export const { apply, update } = settingSlice.actions;
export default settingSlice.reducer;
