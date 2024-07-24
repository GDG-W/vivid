import React from 'react';
import styles from './modal.module.scss';

export const Modal: React.FC<IModalProps> = ({ open, onClose, children, width }) => {
  if (!open) return null;

  const m_width = width === 'sm' ? styles.w_sm : width === 'md' ? styles.w_md : styles.w_full;

  return (
    <div className={styles.modal_overlay} onClick={onClose}>
      <div className={`${styles.modal_container} ${m_width}`} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modal_content}>{children}</div>
      </div>
    </div>
  );
};

interface IModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  width?: 'sm' | 'md' | 'full';
}
