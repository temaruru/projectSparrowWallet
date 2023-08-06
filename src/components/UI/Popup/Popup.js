import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
import Svg from '../../../svgs/Svg';
import styles from './Popup.module.css'
import classNames from 'classnames/bind';

export const Popup = ({ label, type, title, children, text, titleTextStyled, typeIcon }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const titleClasses = classNames(styles.title, titleTextStyled ? styles.title_color : '');

  return (
    <div>
      <div className={styles.label} onClick={openModal}>{label}</div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        {type === 'warning' ?
          <div className={styles.header}>
            <Svg type={typeIcon ? typeIcon : 'warning'} />
            <div className={styles.header_title}>{title}</div>
          </div>
        :
          <div className={titleClasses}>{title}</div>
        }
        {text &&
          <p className={styles.text}>{text}</p>
        }
        {children}
      </Modal>
    </div>
  );
}
