import React from 'react';
import Svg from '../../svgs/Svg';
import styles from './TextBlock.module.css'
import classNames from "classnames/bind";

export const TextBlock = ({ icon, text }) => {

  return (
    <div className={classNames(styles.block, icon ? styles.block_sm : '')}>
      {icon &&
        <div className={styles.icon}>
          <Svg type={icon} />
        </div>
      }
      <div>
        {text.map((item, index) => (
          <p className={styles.text} key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
}
