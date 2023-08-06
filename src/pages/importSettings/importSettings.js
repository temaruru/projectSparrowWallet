import React from 'react';
import styles from './importSettings.module.css';
import {Box, Button, Checkbox, Header} from '../../components';
import classNames from "classnames/bind";

export const ImportSettings = () => {
  const checkboxListMock = [
    {
      id: 11,
      label: 'Whirlpool',
    },
    {
      id: 12,
      label: 'PSBT Muti-signature',
    },
    {
      id: 13,
      label: 'ERC 20 Assets',
    },
  ];

  const radioListMock = [
    {
      id: 14,
      label: 'Public Server ',
      subtext: 'Using a public server means it can see your transactions.'
    },
    {
      id: 15,
      label: 'Bitcoin Core',
    },
  ];

  const checkboxList = checkboxListMock.map((item) =>
    <Box className={styles.row} key={item.id}>
      <Checkbox
        type='checkbox'
        variant='line'
        id={item.id}
        label={item.label}
      />
    </Box>
  );

  const radioList = radioListMock.map((item) =>
    <div className={styles.row_grid} key={item.id}>
      <Checkbox
        type='radio'
        variant='line'
        id={item.id}
        label={item.label}
        name='radioList'
        subtext={item.subtext}
      />
    </div>
  );

  return (
    <div className='page'>
      <Header title='Settings' />
      <div className='page-inner'>
        <div className={styles.list}>
          {checkboxList}
        </div>
        <div className={classNames(styles.list, styles.list_grid)}>
          {radioList}
        </div>
      </div>
      <div className="page-inner page-align-bottom">
        <Button variant='default'>
          Continue
        </Button>
      </div>
    </div>
  )
}
