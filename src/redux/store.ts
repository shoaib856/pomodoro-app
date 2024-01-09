import { configureStore } from "@reduxjs/toolkit";
import SettingSlice from "./reducers/Setting.Slice";
import PomodoroSlice from "./reducers/Pomodoro.Slice";
import { RootState } from "../utils/interfaces";
import LongBreakSlice from "./reducers/LongBreak.Slice";
import ShortBreakSlice from "./reducers/ShortBreak.Slice";
import ControllerSlice from "./reducers/Controller.Slice";

const store = configureStore<RootState>({
  reducer: {
    Pomodoro: PomodoroSlice,
    Setting: SettingSlice,
    LongBreak: LongBreakSlice,
    ShortBreak: ShortBreakSlice,
    Controller: ControllerSlice,
  },
});

export default store;
