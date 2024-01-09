import { useGetLongBreakValues } from "../Hooks/useGetLongBreakValues";
import { useGetPomodoroValues } from "../Hooks/useGetPomodoroValues";
import { useGetShortBreakValues } from "../Hooks/useGetShortBreakValues";
import {
  countDown as countDownPomodoro,
  reset as resetPomodoro,
} from "../redux/reducers/Pomodoro.Slice";
import {
  countDown as countDownShortBreak,
  reset as resetShortBreak,
} from "../redux/reducers/ShortBreak.Slice";
import {
  countDown as countDownLongBreak,
  reset as resetLongBreak,
} from "../redux/reducers/LongBreak.Slice";

export const get = [
  useGetPomodoroValues,
  useGetShortBreakValues,
  useGetLongBreakValues,
];

export const countDown = [
  countDownPomodoro,
  countDownShortBreak,
  countDownLongBreak,
];

export const reset = [resetPomodoro, resetShortBreak, resetLongBreak];
