import { ForwardedRef, forwardRef } from "react";

const Modal = forwardRef(
  (
    { children }: { children: React.ReactNode },
    ref: ForwardedRef<HTMLDialogElement>
  ) => {
    return (
      <dialog ref={ref} className="modal">
        <div className="modal-box bg-white overflow-y-visible relative">
          {children}
        </div>
      </dialog>
    );
  }
);
export default Modal;
