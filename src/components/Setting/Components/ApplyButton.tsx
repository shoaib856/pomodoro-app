import { useDispatch } from "react-redux";
import { setVal as setValPomodoro } from "../../../redux/reducers/Pomodoro.Slice";
import { setVal as setValLongBreak } from "../../../redux/reducers/LongBreak.Slice";
import { setVal as setValShortBreak } from "../../../redux/reducers/ShortBreak.Slice";
import { getLocalVal } from "../../../utils/localStorage";
import { apply } from "../../../redux/reducers/Setting.Slice";
import { resetController } from "../../../redux/reducers/Controller.Slice";

const ApplyButton = ({ closeModal }: { closeModal: () => void }) => {
  const dispatch = useDispatch();

  const handleApply = () => {
    dispatch(apply());
    dispatch(setValPomodoro(getLocalVal("pomodoro")));
    dispatch(setValLongBreak(getLocalVal("long break")));
    dispatch(setValShortBreak(getLocalVal("short break")));
    dispatch(resetController());

    closeModal();
  };

  return (
    <button
      onClick={handleApply}
      className="absolute -bottom-[26.5px] left-1/2 -translate-x-1/2 min-w-[140px] min-h-[53px] !bg-pallet-bittersweet bg-gradient-to-t hover:from-white/[.2031] hover:to-white/[.2031] rounded-[26.5px] text-white"
    >
      Apply
    </button>
  );
};

export default ApplyButton;
