import React from 'react';
import classNames from 'classnames/bind';
import styles from './Bar.module.css'
import Svg from "../../../svgs/Svg";
import { Tooltip } from "react-tooltip";
import { useState } from "react";

export const Bar = ({ title, tooltip, variant, options }) => {
  const variants = {
    default: styles.default,
    points: styles.points,
    inline: styles.inline,
  }

  const blockClasses = classNames(styles.block, variants[variant]);
  const [active, setActive] = useState(null);

  const handleClick = (index) => {
    setActive(index);
  };

  return (
    <div className={blockClasses}>
      {title && tooltip ? (
        <div className={styles.row}>
          <div className={styles.title}>{title}</div>
          <div className={styles.tooltip} data-tooltip-content={tooltip}>
            <Svg type='question-circle' />
          </div>
          <Tooltip anchorSelect="[data-tooltip-content]" />
        </div>
      ) : title ? (
        <div className={styles.title}>{title}</div>
      ) : ''}

      <div className={styles.row}>
        {options.map((item, index) => (
          <div key={index} className={styles.item_wrap}>
            <div
              className={classNames(styles.item, (active === index ? styles.item_active : ''))}
              onClick={() => handleClick(index)}
            >
              {item.icon &&
                <Svg type={item.icon} />
              }
              <span className={styles.label}>{item.title}</span>
            </div>
            {variants['points'] && !title ?
              <i className={styles.separator}></i>
            : ''}
          </div>
        ))}
      </div>
    </div>
  );
}
