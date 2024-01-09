/* eslint-disable @typescript-eslint/ban-ts-comment */
import { get } from "../utils/modesProps";

const CountDown = ({ selected }: { selected: number }) => {
  const { min, sec } = get[selected]();
  return (
    <span className="countdown text-h1 text-hawkesBlue flex items-center gap-2">
      <span
        style={{
          //@ts-ignore
          "--value": min,
        }}
      ></span>
      :
      <span
        style={{
          //@ts-ignore
          "--value": sec,
        }}
      ></span>
    </span>
  );
};

export default CountDown;
