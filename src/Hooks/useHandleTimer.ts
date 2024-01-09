import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Timer } from "../utils/interfaces";
import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";
import {
  setPause,
  setRestart,
  setStart,
} from "../redux/reducers/Controller.Slice";
import { useGetControllerValues } from "./useGetControllerValues";

export const useHandleTimer = (
  useTimer: () => Timer,
  countDown: ActionCreatorWithoutPayload,
  reset: ActionCreatorWithoutPayload
) => {
  const timer = useTimer();
  const dispatch = useDispatch();

  const { pause, restart, start } = useGetControllerValues();
  const intervalRef = useRef<number>();

  useEffect(() => {
    if (start) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => dispatch(countDown()), 1000);
      if (pause) clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [pause, dispatch, start, countDown]);

  useEffect(() => {
    dispatch(setRestart(timer.min === 0 && timer.sec === 0));
  }, [timer, dispatch]);

  useEffect(() => {
    if (restart) dispatch(setStart(false));
  }, [restart, dispatch]);

  const handlePause = () => dispatch(setPause(!pause));
  const handleStart = () => {
    dispatch(setStart(true));
    if (restart) {
      dispatch(reset());
      dispatch(setRestart(false));
    }
  };

  const handleRestart = () => setRestart(true);

  return { pause, start, restart, handlePause, handleStart, handleRestart };
};
