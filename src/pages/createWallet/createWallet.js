import React from 'react';
import {Button, Header, Input, SubHeader} from '../../components';

export const CreateWallet = () => {

  return (
    <div className='page'>
      <Header title='Create Wallet' />
      <div className='page-inner'>
        <SubHeader
          title='Enter a name for this wallet:'
          icon='wallet-md'
        />
        <Input
          placeholder='Wallet Name'
          size='lg'
        />
      </div>
      <div className="page-inner page-align-bottom">
        <div className="page-actions">
          <Button variant='inline'>
            Cancel
          </Button>
          <Button variant='default'>
            Create Wallet
          </Button>
        </div>
      </div>
    </div>
  )
}
