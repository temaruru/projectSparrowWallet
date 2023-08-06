import React from 'react';
import Svg from '../../svgs/Svg';
import styles from './Header.module.css'

export const Header = ({ title, woArrow }) => {

  return (
    <header className={styles.header}>
      {!woArrow && (
        <div className={styles.back}>
          <Svg type='arrow-left' />
        </div>
      )}
      <div className={styles.title}>{title}</div>
    </header>
  );
}
