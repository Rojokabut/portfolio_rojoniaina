import React, { useEffect, useRef } from "react";
import { Download } from "lucide-react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, onConfirm, title, description }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Focus sur le modal à l'ouverture
  useEffect(() => {
    if (open && modalRef.current) {
      modalRef.current.focus();
    }
  }, [open]);

  // Fermer avec la touche Echap
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all animate-fadeIn">
      <div
        ref={modalRef}
        tabIndex={-1}
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 w-full max-w-md outline-none relative animate-modalPop"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
      >
        <div className="flex flex-col items-center mb-4">
          <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mb-2 shadow-sm">
            <Download className="text-blue-600 dark:text-blue-300" size={32} />
          </div>
          <h2 id="modal-title" className="text-2xl font-bold text-gray-900 dark:text-white mb-1 text-center">
            {title}
          </h2>
          <p id="modal-desc" className="text-gray-600 dark:text-gray-300 text-center text-base mb-2">
            {description}
          </p>
        </div>
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium shadow hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          >
            Annuler
          </button>
          <button
            onClick={onConfirm}
            className="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          >
            Télécharger
          </button>
        </div>
        <button
          onClick={onClose}
          aria-label="Fermer le modal"
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        </button>
      </div>
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease;
        }
        @keyframes modalPop {
          0% { transform: scale(0.95) translateY(20px); opacity: 0; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        .animate-modalPop {
          animation: modalPop 0.25s cubic-bezier(.4,2,.6,1) both;
        }
      `}</style>
    </div>
  );
};

export default Modal; 