import React from 'react';
import styles from './loading.module.css';
import classNames from "classnames/bind";
import logo from '../../assets/images/logo-sm.svg';

export const Loading = () => {
  return (
    <div className={classNames('page', styles.page)}>
      <div className='page-inner'>
        <h1 className={styles.logo}>
          <img src={logo} alt="Sparrow"/>
          <div className={styles.title}>Sparrow Wallet</div>
          <div className={styles.subtitle}>Financial self sovereignty</div>
        </h1>
      </div>
    </div>
  )
}
