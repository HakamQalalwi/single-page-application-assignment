import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setModalContentAction,
  setModalTitle,
  toggleModalAction,
} from "../../store";
import Button from "../Button";

interface ModalProps {
  children?: React.ReactNode;
  isOpen?: boolean;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ children, title }) => {
  const dispatch = useDispatch();
  const { isOpenModal, modalContent, modalTitle } = useSelector(
    (state: any) => state
  );

  const handleModalControl = () => {
    dispatch(toggleModalAction());
    dispatch(setModalContentAction(null));
    dispatch(setModalTitle(""));
  };

  return (
    <div className={`modal ${isOpenModal ? "open" : "close"}`}>
      <div className="modalBackdrop" onClick={handleModalControl}></div>
      <div className="modalContent">
        <div className="modalContentHeadline">
          <h2 className="title">{title || modalTitle}</h2>
          <Button theme="icon" onClick={handleModalControl}>
            X
          </Button>
        </div>
        <div className="modalContentBody">{children || modalContent}</div>
      </div>
    </div>
  );
};

export default Modal;
