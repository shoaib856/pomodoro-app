import CountDownContainer from "./components/CountDownContainer";
import CountDown from "./components/CountDown";
import CircularProgress from "./components/CircularProgress";
import ControllerButton from "./components/ControllerButton";
import Setting from "./components/Setting/Setting";
import Navigation from "./components/Navigation";
import { useEffect, useState } from "react";
import AppContainer from "./components/AppContainer";
import { getLocalVal } from "./utils/localStorage";
import { useGetSettingValues } from "./Hooks/useGetSettingValues";

const App = () => {
  const [selected, setSelected] = useState(0);
  const { font } = useGetSettingValues();

  useEffect(() => {
    console.log("vvvvvvvvvvvvvvvvvv");

    const html = document.querySelector("html");
    html?.classList.add(getLocalVal("font") as string);
  }, [font]);

  return (
    <AppContainer>
      <Navigation {...{ selected, setSelected }} />
      <CountDownContainer>
        <CircularProgress {...{ selected }}>
          <CountDown {...{ selected }} />
          <ControllerButton {...{ selected }} />
        </CircularProgress>
      </CountDownContainer>
      <Setting />
    </AppContainer>
  );
};

export default App;
