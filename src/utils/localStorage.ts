type KeyType = "pomodoro" | "short break" | "long break" | "font";

export const setLocalVal = (key: KeyType, val: number | string) => {
  localStorage.setItem(key, `${val}`);
};

export const getLocalVal = (key: KeyType) => {
  return key === "font"
    ? (localStorage.getItem(key) as string)
    : (JSON.parse(localStorage.getItem(key) as string) as number);
};
