import React from 'react';
import styles from './settings.module.css'
import { useState } from 'react';
import {Header, ItemBlock, Popup, Button, Input, Checkbox} from '../../components';
import Svg from "../../svgs/Svg";

export const Settings = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const pageItems = [
    {
      title: '',
      list: [
        {
          id: '0',
          title: 'Lock Now',
          icon: 'lock',
        },
        {
          id: '16',
          title: 'Scan QR',
          icon: 'scan',
        },
        {
          id: '1',
          title: 'Connected Sites',
          icon: 'connected',
        },
      ]
    },
    {
      title: 'General',
      list: [
        {
          id: '6',
          title: 'RPC Node',
          icon: 'rpc',
        },
        {
          id: '2',
          title: 'Theme',
          icon: 'theme',
          selectedText: 'Light',
        },
        {
          id: '3',
          title: 'Language',
          icon: 'lang',
          selectedText: 'English',
        },
        {
          id: '4',
          title: 'Default Currency',
          icon: 'currency',
          selectedText: 'USD',
        },
        {
          id: '17',
          title: 'Sound & Vibration',
          icon: 'sound',
        },
      ]
    },
    {
      title: 'Security',
      list: [
        {
          id: '5',
          title: 'Change Password',
          icon: 'password',
        },
        {
          id: '7',
          title: 'Touch ID',
          icon: 'touchId',
          children:
            <Checkbox
              type='checkbox'
              variant='line'
              id='touchId'
              name='list'
            />,
        },
        {
          id: '8',
          title: 'App Auto-lock',
          icon: 'appLock',
          children:
            <Checkbox
              type='checkbox'
              variant='line'
              id='autoLock'
              name='list'
            />,
        },
        {
          id: '10',
          title: 'Auto-lock Timer',
          icon: 'time',
          selectedText: '1 Hour',
        },
        {
          id: '11',
          title: 'Protection',
          icon: 'protection',
        },
        {
          id: '12',
          title: 'Reset App',
          icon: 'reset',
          color: 'var(--error)',
        },
      ]
    },
    {
      title: 'Alert',
      list: [
        {
          id: '13',
          title: 'Notification',
          icon: 'notification',
        },
      ]
    },
    {
      title: 'About',
      list: [
        {
          id: '14',
          title: 'Version',
          icon: 'sharp',
          children: <span className={styles.inline_text}>1.0.0-2022010100</span>,
        },
        {
          id: '15',
          title: 'Language',
          icon: 'file',
          children: <div className={styles.inline_text_icon}>Export <Svg type='import' /></div>,
        },
      ]
    },
  ];

  return (
    <div className='page'>
      <Header title='Settings' />
      <div className='page-inner'>
        {pageItems.map((group, index) => (
          <div className='list-group' key={index}>
            {group.title && <div className='list-title'>{group.title}</div>}
            {group.list.map((item) => (
              <ItemBlock content={item} key={item.id} />
            ))}
          </div>
        ))}

        <div className={styles.text}>
          This will help support debug any issue you might encounter. Please send to <a href="mailto:support@sparrow.com">support@sparrow.com</a> or support only.
        </div>

        {/*Модалка*/}
        <div>
          <Popup
            type='warning'
            title='Reset app'
            titleTextStyled
            label='Reset app'
            text='This will delete all the data you have created on Arbitrum. After making sure that you have a proper backup, ENTER “RESET” to reset the App'
          >
            <div className="page-row">
              <Input
                placeholder='Reset'
                size='lg'
              />
            </div>
            <div className="page-actions">
              <Button variant='inline'>
                Cancel
              </Button>
              <Button variant='default'>
                Reset
              </Button>
            </div>
          </Popup>
        </div>
      </div>
    </div>
  )
}
