import { useDispatch } from "react-redux";
import closeIcon from "../../../assets/icons/icon-close.svg";
import { resetSetting } from "../../../redux/reducers/Setting.Slice";

const ModalHeader = ({ closeModal }: { closeModal: () => void }) => {
  const dispatch = useDispatch();
  const onClick = () => {
    closeModal();
    dispatch(resetSetting());
  };
  return (
    <header className="flex justify-between items-start">
      <h2 className="text-h2 text-mirage">Setting</h2>
      <button
        type="button"
        className="btn btn-circle btn-ghost opacity-50 hover:opacity-100"
        {...{ onClick }}
      >
        <img src={closeIcon} alt="close" />
      </button>
    </header>
  );
};

export default ModalHeader;
