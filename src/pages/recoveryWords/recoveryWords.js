import React from 'react';
import {Button, Header, FormColumns, SubHeader} from '../../components';
import styles from './recoveryWords.module.css';

export const RecoveryWords = () => {
  return (
    <div className='page'>
      <Header title='Recovery words' />
      <div className='page-inner'>
        <SubHeader title='Write down the recovery words in the correct order and store them in a safe place. They are needed to recover your wallet' />
        
        <FormColumns inputsList={[
          'Juice',
          'Juice2',
          'Juice3',
          'Juice4',
          'Juice5',
          'Juice6',
          'Juice7',
          'Juice8',
          'Juice9',
          'Juice10',
          'Juice11',
          'Juice12',
        ]} />

        <div className={styles.alert}>
          You will not be able to see these words <br/> again once the wallet is created.
        </div>

        <div className="page-actions">
          <Button variant='inline'>
            Cancel
          </Button>
          <Button variant='default'>
            Continue
          </Button>
        </div>
      </div>
    </div>
  )
}
