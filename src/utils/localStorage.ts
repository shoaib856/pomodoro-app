type KeyType = "pomodoro" | "short break" | "long break";

export const setLocalVal = (key: KeyType, val: number) => {
  localStorage.setItem(key, `${val}`);
};

export const getLocalVal = (key: KeyType) => {
  return JSON.parse(localStorage.getItem(key) as string) as number;
};

