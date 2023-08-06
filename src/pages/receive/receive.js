import React from 'react';
import { useRef } from 'react';
import styles from './receive.module.css'
import { Header, Input, Button } from '../../components';
import classNames from "classnames/bind";
import QRCode from "react-qr-code";

export const Receive = () => {
  const inputRef = useRef();

  return (
    <div className='page'>
      <Header title='Receive' />
      <div className={classNames('page-inner', styles.page_inner)}>
        <div className="form-row">
          <div className={styles.input_wrap}>
            <Input
              title='Address:'
              icon='copy'
              placeholder='bc1qhwealuyddv808hv0ra4ejej7tqkuw97q7...'
              size='lg'
              inputRef={inputRef}
            />
          </div>
        </div>

        <div className="page-row">
          <Input
            title='Label:'
            size='lg'
          />
        </div>

        <div className={styles.text_row}>
          <span>Derivation:</span>
          <span>m/84'/0'/0'/0/0</span>
        </div>
        <div className={styles.text_row}>
          <span>Last Used:</span>
          <span>Unknown</span>
        </div>
        <div className={styles.block}>
          <div className={styles.block_qr}>
            <div>
              <QRCode
                size={80}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value='Demo'
                viewBox={`0 0 256 256`}
              />
            </div>
          </div>
        </div>

        <Button variant='default'>
          Get Next Address
        </Button>
      </div>
    </div>
  )
}
