import React from 'react';
import styles from './utxo.module.css'
import { Header, ItemBlock, Checkbox, Button, Input, TheSelect } from '../../components';

export const Utxo = () => {
  const pageItems = [
    {
      title: 'Type:',
      list: [
        {
          id: '81',
          title: 'Public Server',
          color: 'var(--orange)',
          children:
            <Checkbox
              type='radio'
              variant='line'
              id='utxo1'
              name='utxo-list'
            />,
        },
        {
          id: '82',
          title: 'Bitcoin Core',
          color: '#5AD047',
          children:
            <Checkbox
              type='radio'
              variant='line'
              id='utxo2'
              name='utxo-list'
            />,
        },
        {
          id: '83',
          title: 'Private Electrum',
          color: 'var(--blue)',
          children:
            <Checkbox
              type='radio'
              variant='line'
              id='utxo3'
              name='utxo-list'
            />,
        },
      ]
    }
  ];

  const options = [
    { value: '0', label: 'electrum. server' },
  ];

  return (
    <div className='page'>
      <Header title='UTXO' />
      <div className='page-inner'>
        {pageItems.map((group, index) => (
          <div className='list-group' key={index}>
            <div className='list-title'>{group.title}</div>
            {group.list.map((item) => (
              <ItemBlock content={item} key={item.id} />
            ))}
          </div>
        ))}

        <div className={styles.title}>Private Electrum Server</div>

        <div className={styles.subtitle}>URL:</div>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className='select-inline'>
              <TheSelect
                options={options}
                variant='default'
              />
            </div>
          </div>
          <div className={styles.col_sm}>
            <Input
              placeholder='50001'
              size='lg'
            />
          </div>
        </div>

        <div className={styles.row}>
          <Checkbox
            type='checkbox'
            id='ssl'
            label='Use SSL'
            variant='line'
          />
        </div>

        <div className={styles.subtitle}>Certificate:</div>
        <div className={styles.row}>
          <Input
            placeholder='Optional server certificate (.crt)'
            icon='file-upload'
            iconAlign
            size='lg'
          />
        </div>

        <div className={styles.row}>
          <Checkbox
            type='checkbox'
            id='proxy'
            label='Use Proxy'
            variant='line'
          />
        </div>

        <div className={styles.subtitle}>Proxy URL:</div>
        <div className={styles.row}>
          <div className={styles.col}>
            <Input
              placeholder='Localhost'
              size='lg'
            />
          </div>
          <div className={styles.col_sm}>
            <Input
              placeholder='9150'
              size='lg'
            />
          </div>
        </div>

        <div className="page-actions">
          <Button variant='inline'>
            Cancel
          </Button>
          <Button variant='default'>
            Test Connection
          </Button>
        </div>
      </div>
    </div>
  )
}
