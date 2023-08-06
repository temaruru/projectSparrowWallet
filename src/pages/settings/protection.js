import React from 'react';
import styles from './settings.module.css'
import { Header, ItemBlock, Checkbox } from '../../components';

export const Protection = () => {
  const pageItems = [
    {
      title: '',
      list: [
        {
          id: 'protection0',
          title: 'Create Transactions',
          children:
            <Checkbox
              type='radio'
              variant='line'
              id='protection0'
              name='list'
            />,
        },
        {
          id: 'protection1',
          title: 'Create / Remove Wallets',
          children:
            <Checkbox
              type='radio'
              variant='line'
              id='protection1'
              name='list'
            />,
        },
        {
          id: 'protection2',
          title: 'Create / Remove Accounts',
          children:
            <Checkbox
              type='radio'
              variant='line'
              id='protection2'
              name='list'
            />,
        },
      ]
    }
  ];

  return (
    <div className='page'>
      <Header title='Protection' />
      <div className='page-inner'>
        {pageItems.map((group, index) => (
          <div className='list-group' key={index}>
            {group.title && <div className='list-title'>{group.title}</div>}
            {group.list.map((item) => (
              <ItemBlock content={item} key={item.id} />
            ))}
          </div>
        ))}
        <div className={styles.text_sm}>
          You password will be required in these cases even you’ve already unlocked Sparrow
        </div>
      </div>
    </div>
  )
}
