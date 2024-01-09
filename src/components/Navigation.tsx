import logo from "../assets/icons/logo.svg";
import { useDispatch } from "react-redux";
import { resetController } from "../redux/reducers/Controller.Slice";
import { reset } from "../utils/modesProps";

const Navigation = ({
  selected,
  setSelected,
}: {
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const dispatch = useDispatch();

  const handleSelect = (i: number) => {
    setSelected(i);
    dispatch(resetController());
    reset.forEach((resetFunc) => dispatch(resetFunc()));
  };
  return (
    <header className="flex flex-col items-center gap-14">
      <figure>
        <img src={logo} alt="logo" />
      </figure>
      <nav>
        <div
          role="tablist"
          className="tabs tabs-boxed rounded-[31.5px] p-2 bg-mirage"
        >
          {["pomodoro", "short break", "long break"].map((tab, i) => {
            return (
              <a
                key={i}
                role="tab"
                aria-selected={selected === i}
                onClick={() => handleSelect(i)}
                className="tab aria-selected:text-mirage aria-selected:bg-pallet-bittersweet text-b1 px-6 py-4 h-12 !rounded-[26.5px]"
              >
                {tab}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
