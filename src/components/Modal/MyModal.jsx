import React from "react";
import ReactModal from "react-modal";
import useModal from "../../hooks/useModal";
import s from "./MyModal.module.scss";
import { FaX } from "react-icons/fa6";

export default function MyModal({ isOpen, component }) {
  const { closeModal } = useModal();

  const handleClose = () => {
    closeModal(MyModal);
    document.body.classList.remove("ReactModal__Body--open");
  };

  return (
    <>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={handleClose}
        overlayClassName={s.modalOverlay}
        className={s.modal}
      >
        <button type="button" onClick={handleClose} className={s.btnClose}>
          <FaX size={15} />
        </button>
        <div>
          <div>{component}</div>
        </div>
      </ReactModal>
    </>
  );
}
