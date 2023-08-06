import React from 'react';
import classNames from 'classnames/bind';
import styles from './Box.module.css'

export const Box = ({ onClick, className, style, children }) => {
  return (
    <div onClick={onClick} className={classNames(styles.item, className)} style={style}>
      {children}
    </div>
  );
}
