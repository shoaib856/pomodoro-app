import TimerContainer from "./components/TimerContainer";
import CounterDown from "./components/CounterDown";
import Progress from "./components/Progress";
import TimerButton from "./components/TimerButton";
import Setting from "./components/Setting/Setting";
import Navigation from "./components/Navigation";
import { useState } from "react";

const App = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col gap-11 items-center">
      <Navigation {...{ selected, setSelected }} />
      <TimerContainer>
        <div className="bg-mirage p-[13.5px] rounded-full">
          <Progress {...{ selected }}>
            <div className="flex flex-col gap-10 z-10">
              <CounterDown {...{ selected }} />
              <TimerButton {...{ selected }} />
            </div>
          </Progress>
        </div>
      </TimerContainer>
      <Setting />
    </div>
  );
};

export default App;
