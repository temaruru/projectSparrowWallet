import React from 'react';
import styles from './whirlpool2.module.css'
import {Header, Input, Button, Bar, PriorityRangeSlider, SubHeader} from '../../components';
import classNames from "classnames/bind";

export const Whirlpool2 = () => {
  const barOptions = [
    { title: '0,5 BTC' },
    { title: '0,05 BTC' },
    { title: '0,01 BTC' },
    { title: '0,001 BTC' },
  ];

  return (
    <div className='page'>
      <Header title='Whirlpool Configuration' />
      <div className={classNames('page-inner', styles.page_inner)}>
        <SubHeader
          title='Configure Whirlpool'
          subtitle='Configure Whirlpool using the fields below. You can enter a Samourai SCODE for reduced cost mixing.'
          icon='mix'
          iconed
        />
        <div className='page-row'>
          <Input
            title='SCODE:'
            size='lg'
          />
        </div>
        <div className='page-row'>
          <PriorityRangeSlider />
          <div className={styles.text_row}>
            <span>Premix Fee Rate:</span>
            <span>1 sats/vB</span>
          </div>
        </div>
        <div className={styles.row_title}>Mixing pool:</div>
        <div className="page-row">
          <Bar
            options={barOptions}
            variant='points'
          />
        </div>
      </div>
      <div className="page-inner page-align-bottom">
        <div className="page-actions">
          <Button variant='inline'>
            Cancel
          </Button>
          <Button variant='default'>
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
