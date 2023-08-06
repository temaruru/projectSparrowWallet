import React from 'react';
import styles from './whirlpool3.module.css'
import {Header, Button, TheSelect, SubHeader} from '../../components';
import classNames from "classnames/bind";

export const Whirlpool3 = () => {
  const selectOptions = [
    { value: '1', label: '100,000 sats' },
    { value: '2', label: '10,000 sats' },
    { value: '3', label: '1,000 sats' },
  ];

  const text = [
    'Choose which pool to use below. You will then be able to preview your premix transaction. Your wallet password may be required to add the premix wallet.',
  ];

  return (
    <div className='page'>
      <Header title='Whirlpool Configuration' />
      <div className={classNames('page-inner', styles.page_inner)}>
        <SubHeader
          title='Select pool'
          subtitle='Choose which pool to use below. You will then be able to preview your premix transaction. Your wallet password may be required to add the premix wallet.'
          icon='mix'
          iconed
        />
        <div className='page-row'>
          <div className={styles.label_row}>
            <span>Pool:</span>
          </div>
          <TheSelect
            variant='default'
            options={selectOptions}
          />
        </div>
        <div className={styles.text_row}>
          <span>Anonset:</span>
          <span>5 UTXOs</span>
        </div>
        <div className={styles.text_row}>
          <span>Pool Fee:</span>
          <span>5,000 sats</span>
        </div>
        <div className={styles.text_row}>
          <span>Mixing pool:</span>
          <span>6 UTXOs</span>
        </div>
      </div>

      <div className="page-inner page-align-bottom">
        <div className="page-actions">
          <Button variant='inline'>
            Cancel
          </Button>
          <Button variant='default'>
            Preview Premix
          </Button>
        </div>
      </div>
    </div>
  )
}
