export interface Timer {
  min: number;
  sec: number;
}

export interface Setting {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
  font: string;
}

export interface Controller {
  start: boolean;
  pause: boolean;
  restart: boolean;
}

export interface RootState {
  Pomodoro: Timer;
  ShortBreak: Timer;
  LongBreak: Timer;
  Setting: Setting;
  Controller: Controller;
}
