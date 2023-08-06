import React from 'react';
import Svg from '../../../svgs/Svg';
import classNames from 'classnames/bind';
import styles from './Button.module.css'

export const Button = ({ onClick, className, children, variant, icon, color }) => {
  const variants = {
    outlined: styles.outlined,
    outlinedSm: styles.sm,
    disabled: styles.disabled,
    inline: styles.inline,
    bar: styles.bar,
    start: styles.start,
  }

  const buttonClasses = classNames(styles.btn, variants[variant], className);

  return (
    <button onClick={onClick} className={buttonClasses} style={{backgroundColor: color}}>
      {icon &&
        <div className={styles.icon}>
          <Svg type={icon} className='icon' />
        </div>
      }
      {children}
    </button>
  );
}
