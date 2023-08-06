import React from 'react';
import styles from './start.module.css';
import { Button } from '../../components';

import logo from "../../assets/images/logo-md.png";

export const Start = () => {
  return (
    <div className='page page-color-bg'>
      <div className='page-inner page-align-bottom'>
        <h1 className={styles.logo}>
          <img src={logo} alt="Sparrow"/>
          <span>Sparrow Wallet</span>
        </h1>
        <div className={styles.subtitle}>Import an existing wallet or create a new wallet</div>
        <Button variant='start' icon='button-create'>
          Create a new wallet
        </Button>
        <Button variant='start' icon='button-import'>
          Import existing wallet
        </Button>
        <p className="page-text">By processing, you agree to the Terms <br/> of use and Privacy policy</p>
      </div>
    </div>
  )
}
