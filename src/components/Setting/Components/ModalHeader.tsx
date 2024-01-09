import closeIcon from "../../../assets/icons/icon-close.svg";

const ModalHeader = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <header className="flex justify-between items-start">
      <h2 className="text-h2 text-mirage">Setting</h2>
      <button
        type="button"
        className="btn btn-circle btn-ghost opacity-50 hover:opacity-100"
        onClick={closeModal}
      >
        <img src={closeIcon} alt="close" />
      </button>
    </header>
  );
};

export default ModalHeader;
