import React, { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;      // Modal open hai ya nahi
  onClose: () => void;  // Modal close karne ka function
  children: ReactNode;  // Modal ke andar ka content
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[300px]">
        {children}

        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
