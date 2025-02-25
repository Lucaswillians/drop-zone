import React from "react";
import "./Modal.css";
import { Link } from "react-router-dom";
import { MdCancel } from "react-icons/md";

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <Link to="/home" className="close-button">
          <MdCancel />
        </Link>
        {children}
      </div>
    </div>
  );
};

export default Modal;
