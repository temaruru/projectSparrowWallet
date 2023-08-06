import React from 'react';
import styles from './InputWithSelect.module.css'
import {Bar, Input} from '../';
import classNames from "classnames/bind";

export const InputWithSelect = ({ title, extended, placeholder }) => {
  const inputCLasses = classNames(styles.block, extended ? styles.extended : '');

  const mockOptions = [
    { title: 'SATS' },
    { title: 'USD' },
    { title: 'BTC' },
  ];

  return (
    <>
      {title &&
        <div className={styles.title_wrap}>
          <div className={styles.title}>
            {title}
          </div>
          <Bar
            variant='inline'
            options={mockOptions}
          />
        </div>
      }
      <div className={inputCLasses}>
        {extended ? (
          <>
            <Input
              placeholder={placeholder}
              size='lg'
            />
            <div className={styles.action}>Max</div>
          </>
        ) : (
          <Input
            placeholder={placeholder}
            size='lg'
          />
        )}
        <div className={classNames(styles.select, !extended ? styles.select_right : '')}>USD</div>
      </div>
    </>
  );
}
