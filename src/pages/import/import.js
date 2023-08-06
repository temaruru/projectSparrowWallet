import React from 'react';
import {Button, Header, SubHeader} from '../../components';
import styles from './import.module.css'

export const Import = () => {

  return (
    <div className='page'>
      <Header title='Import Wallet' />
      <div className='page-inner'>
        <SubHeader
          title='Mnemonics words (BIT39)'
          icon='import-frame'
        />
        <div className={styles.wrapper}>
          <Button variant='default' className={styles.action}>Use a 12- words recovery phrase</Button>
          <Button variant='default' className={styles.action}>Use a 15- words recovery phrase</Button>
          <Button variant='default' className={styles.action}>Use a 18- words recovery phrase</Button>
          <Button variant='default' className={styles.action}>Use a 21- words recovery phrase</Button>
          <Button variant='default' className={styles.action}>Use a 24- words recovery phrase</Button>
          <div className={styles.separator}>or</div>
          <Button
            variant='default'
            icon='qr-code'
            className={styles.button}
          >Scan QR</Button>
        </div>
      </div>
    </div>
  )
}
