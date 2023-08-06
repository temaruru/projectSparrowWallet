import React from 'react';
import { useState } from 'react';
import { Header, ItemBlock, Checkbox } from '../../components';
import styles from './settings.module.css'

export const Notification = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const pageItems = [
    {
      title: '',
      subtitle: 'Receive notifications of account activities and asset changes.',
      list: [
        {
          id: 'ntf0',
          title: 'Notification',
          children:
            <Checkbox
              type='radio'
              variant='line'
              id='ntf0'
              name='notification_list'
            />,
        },
      ]
    },
    {
      title: 'Market',
      list: [
        {
          id: 'ntf2',
          title: 'BTC and ETH Movement',
          description: 'Large price fluctuations in BTC and ETH',
          children:
            <Checkbox
              type='checkbox'
              variant='line'
              id='ntf2'
              name='notification_list'
            />,
        },
        {
          id: 'ntf3',
          title: 'Favourite',
          description: 'Large price fluctuations of your fav assets',
          children:
            <Checkbox
              type='checkbox'
              variant='line'
              id='ntf3'
              name='notification_list'
            />,
        },
        {
          id: 'ntf4',
          title: 'Manage Threshold',
          selectedText: '5%',
        },
      ]
    },
    {
      title: 'Alert',
      list: [
        {
          id: 'ntf5',
          title: 'Price Alert',
          description: 'When token reaches the set price',
          children:
            <Checkbox
              type='checkbox'
              variant='line'
              id='ntf5'
              name='notification_list'
            />,
        },
        {
          id: 'ntf6',
          title: 'Manage',
          selectedText: '0',
        },
      ]
    },
  ];

  return (
    <div className='page'>
      <Header title='Notification' />
      <div className='page-inner'>
        {pageItems.map((group, index) => (
          <div className='list-group' key={index}>
            {group.title && <div className='list-title'>{group.title}</div>}
            {group.list.map((item) => (
              <ItemBlock content={item} key={item.id} />
            ))}
            {group.subtitle && <div className={styles.list_subtitle}>{group.subtitle}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}
