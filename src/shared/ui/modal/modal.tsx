import React from 'react';
import modal from '@/shared/ui/modal/modal.module.sass';

interface Modal {
  isOpen: boolean;
  title: string;
  content: string;
  onClose: () => void;
}

const Modal: React.FC<Modal> = ({ isOpen, title, content, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={modal.modal_overlay}>
      <div className={modal.modal}>
        <div className={modal.modal_header}>
          <h2 className={modal.modal_title}>{title}</h2>
          <button className={modal.modal_close} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={modal.modal_content}>{content}</div>
        <div className={modal.modal_actions}>
          <button className={modal.modal_button} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
