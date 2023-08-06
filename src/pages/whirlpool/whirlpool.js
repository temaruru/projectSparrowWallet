import React from 'react';
import styles from './whirlpool.module.css'
import {Header, Button, TextBlock, Menu, SubHeader} from '../../components';
import classNames from "classnames/bind";

export const Whirlpool = () => {
  const barOptions = [
    { title: 'Premix', icon: 'mix' },
    { title: 'Postmix', icon: 'send2' },
    { title: 'Badbank', icon: 'badbank' },
  ];

  const text = [
    'Initiating your first CoinJoin in Sparrow will add three new wallets to your existing wallet: Premix, Postmix and Badbank,',
    'Premix contains UTXOs that have been split from your deposit UTXOs into equal amounts, waiting for their ar first mixing round. Postmix contains UTXOs that have been through at least one mixing round. Badbank contains any change from your premix transaction, and should be treated carefully.',
    'Click on the tabs at the right of the wallet to use these wallets. Note that they will have reduced functionality (for example they will not display receiving addresses).',
  ];

  return (
    <div className='page'>
      <Header title='Whirlpool Configuration' />
      <div className={classNames('page-inner', styles.page_inner)}>
        <SubHeader
          title='Premix, Postmix and Badbank'
          icon='menu-item-2'
        />
        <div className={styles.menu}>
          <Menu data={barOptions} variant='blue' />
        </div>
        <TextBlock
          text={text}
        />
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
