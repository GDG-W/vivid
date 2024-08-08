import React from 'react';
import styles from './modal.module.scss';
import Image from 'next/image';
import CancelIcon from '../../../public/icons/cancel.svg';

interface IModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  width?: 'sm' | 'md' | 'full';
  showHeader?: boolean;
}

export const Modal: React.FC<IModalProps> = ({
  open,
  onClose,
  children,
  width,
  showHeader = false,
}) => {
  if (!open) return null;

  const m_width = width === 'sm' ? styles.w_sm : width === 'md' ? styles.w_md : styles.w_full;

  return (
    <div className={styles.modal_overlay} onClick={onClose}>
      <div className={`${styles.modal_container} ${m_width}`} onClick={(e) => e.stopPropagation()}>
        {/* header */}
        {showHeader && (
          <div className={styles.modal_header}>
            <div className={styles.top_pop}>
              <Image
                src='/icons/devfest-logo.svg'
                alt='DevFest Lagos logo'
                width={132}
                height={34}
                priority={true}
              />
            </div>

            <div className={styles.top_pop}>
              <div className={styles.cancel_text} onClick={onClose}>
                <span className={styles.cancel_text_name}> Cancel Purchase </span>
                <CancelIcon />
              </div>
            </div>
          </div>
        )}

        <div className={styles.modal_content}>{children}</div>
      </div>
    </div>
  );
};
