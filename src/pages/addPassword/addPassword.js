import React from 'react';
import {Button, Header, Digits, SubHeader} from '../../components';

export const AddPassword = () => {
  return (
    <div className='page'>
      <Header title='Add Password' />
      <div className='page-inner'>
        <SubHeader title='This is needed to open and to recover your wallet. Store it safely, it cannot be changed.' />
        <Digits
          name='create'
          label='Create PIN code'
        />
        <Digits
          name='confirm'
          label='Confirm PIN code'
        />
      </div>
      <div className="page-inner page-align-bottom">
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
