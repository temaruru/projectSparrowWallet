import React from 'react';
import styles from './scan.module.css'
import {Button, Header} from '../../components';
import classNames from "classnames/bind";

export const Scan = () => {

  return (
    <div className={classNames('page', styles.bg)}>
      <Header title='WalletConnect' />
      <div className='page-inner'>
        <div className={styles.block}>
        </div>
      </div>
      <div className="page-inner page-align-bottom">
        <div className={styles.actions}>
          <Button variant='bar' icon='album'>
            Album
          </Button>
          <Button variant='bar' icon='copy'>
            Paste
          </Button>
        </div>
      </div>
    </div>
  )
}
