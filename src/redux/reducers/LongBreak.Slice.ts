import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Timer } from "../../utils/interfaces";
import { getLocalVal } from "../../utils/localStorage";

const initialState: Timer = {
  min: getLocalVal("long break") as number || 15,
  sec: 0,
};

const longBreakSlice = createSlice({
  name: "long break",
  initialState,
  reducers: {
    countDown: (state) => {
      if (state.sec > 0) {
        return { ...state, sec: state.sec - 1 };
      } else if (state.min > 0) {
        return { min: state.min - 1, sec: 59 };
      }
      return state;
    },

    setVal: (_state, action: PayloadAction<number>) => {
      return { min: action.payload, sec: 0 };
    },
    reset: () => {
      if (getLocalVal("long break"))
        return { min: getLocalVal("long break") as number, sec: 0 };
      else return initialState;
    },
  },
});

export const { countDown, setVal, reset } = longBreakSlice.actions;

export default longBreakSlice.reducer;
