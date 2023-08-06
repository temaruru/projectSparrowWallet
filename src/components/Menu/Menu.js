import React from 'react';
import { useState } from 'react';
import Svg from '../../svgs/Svg';
import styles from './Menu.module.css'
import classNames from "classnames/bind";

export const Menu = ({ data, variant }) => {
  const [active, setActive] = useState(null);

  const handleClick = (index) => {
    setActive(index);
  };

  const variants = {
    blue: styles.blue,
  }

  const variantClasses = classNames(styles.row, variants[variant]);

  return (
    <nav className={variantClasses}>
      {data.map((item, index) => (
        <div
          className={classNames(styles.item, (active === index ? styles.item_active : ''))}
          onClick={() => handleClick(index)}
          key={index}
        >
          <Svg type={item.icon} />
          <span className={styles.title}>{item.title}</span>
        </div>
      ))}
    </nav>
  );
}
