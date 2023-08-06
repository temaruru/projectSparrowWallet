import React from 'react';
import Svg from '../../svgs/Svg';
import styles from './SubHeader.module.css'
import classNames from "classnames/bind";

export const SubHeader = ({ title, icon, subtitle, children, iconed }) => {

  return (
    <div className={classNames(styles.title, iconed ? styles.title_iconed : '')}>
      <div>
        {title}
        <span className={styles.subtitle}>{subtitle}</span>
      </div>
      {icon && (<Svg type={icon} />)}
      {children && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
}
