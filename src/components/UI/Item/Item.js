import React from 'react';
import Svg from '../../../svgs/Svg';
import classNames from 'classnames/bind';
import styles from './Item.module.css'
import { useState } from "react";
import { Box } from "../../";

export const Item = ({ onClick, className, children, title, subTitle, dropdownList, icon, text }) => {
  const [status, setStatus] = useState(false);

  const itemClasses = classNames(styles.icon, status ? styles.opened : '');

  const handleClick = () => {
    if (dropdownList || text) {
      setStatus(!status);
    }
  }

  return (
    <Box>
      <div className={classNames(styles.trigger, (text ? styles.trigger_sm : ''))} onClick={handleClick}>
        {icon &&
          <div className={styles.icon}>
            <Svg type={icon} className='icon' />
          </div>
        }
        <div className={styles.text}>
          <div className={styles.title}>{title}</div>
          {subTitle && (
            <div className={styles.subTitle}>{subTitle}</div>
          )}
        </div>
        {dropdownList || text ?
          <div className={itemClasses}>
            <Svg type='item-arrow' className='dropdown-icon' />
          </div>
        : ''}
      </div>
      {status && dropdownList ? (
        <div className={styles.dropdown}>
          {dropdownList.map((item, index) =>
            <div className={styles.dropdown_item} key={index}>
              {item.title}
            </div>
          )}
        </div>
      ) : status && text ? (
        <div className={styles.content_text}>{text}</div>
      ) : ''}
    </Box>
  );
}
