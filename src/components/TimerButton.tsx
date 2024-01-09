import { useHandleTimer } from "../Hooks/useHandleTimer";
import {  countDown,  get,  reset } from "../utils/modesProps";

const TimerButton = ({ selected }: { selected: number }) => {
  const { handlePause, pause, handleStart, start, restart } = useHandleTimer(
    get[selected],
    countDown[selected],
    reset[selected]
  );

  return (
    <>
      {start ? (
        <Button onClick={handlePause}>{pause ? "RESUME" : "PAUSE"}</Button>
      ) : (
        <Button onClick={handleStart}>{restart ? "restart" : "start"}</Button>
      )}
    </>
  );
};

export default TimerButton;

const Button = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <button
      className="text-h3 uppercase text-hawkesBlue transition hover:text-pallet-bittersweet"
      type="button"
      {...{ onClick }}
    >
      {children}
    </button>
  );
};
