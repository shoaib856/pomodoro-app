import { createSlice } from "@reduxjs/toolkit";
import { Controller } from "../../utils/interfaces";
const initialState: Controller = {
  start: false,
  pause: false,
  restart: false,
};
const controllerSlice = createSlice({
  name: "controller",
  initialState,
  reducers: {
    setStart: (state, action) => ({ ...state, start: action.payload }),
    setPause: (state, action) => ({ ...state, pause: action.payload }),
    setRestart: (state, action) => ({ ...state, restart: action.payload }),
    resetController: () => initialState,
  },
});

export const { resetController, setPause, setRestart, setStart } =
  controllerSlice.actions;

export default controllerSlice.reducer;
