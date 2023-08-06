import React from 'react';
import {Button, Header, FormColumns} from '../../components';

export const ConfirmRecoveryWords = () => {
  return (
    <div className='page'>
      <Header title='Confirm Recovery Words' />
      <div className='page-inner'>
        <FormColumns inputsListOnce={[
          'Juice',
          'Juice5',
          'Juice12',
        ]} />

        {/*<div>*/}
        {/*  <Popup*/}
        {/*    title='Successfully Created'*/}
        {/*    titleTextStyled*/}
        {/*    label='Successfully Created modal'*/}
        {/*    text='You will now be redirected to the main screen with your assets.'*/}
        {/*  >*/}
        {/*    <Button variant='default'>Okay</Button>*/}
        {/*  </Popup>*/}
        {/*</div>*/}
      </div>
      <div className="page-inner page-align-bottom">
        <Button variant='default'>
          Continue
        </Button>
      </div>
    </div>
  )
}
