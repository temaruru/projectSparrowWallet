import React from 'react';
import { Header, Input, InputWithSelect, Bar, Button, RateRangeSlider } from '../../components';

export const Send = () => {
  const options = [
    { value: 'usd', label: 'USD' },
    { value: 'rub', label: 'RUB' },
    { value: 'try', label: 'TRY' },
  ];

  const feeOptions = [
    { title: 'Target Blocks' },
    { title: 'Mempool Size' },
  ];

  return (
    <div className='page'>
      <Header title='Send' />
      <div className='page-inner'>
        <div className="form-row">
          <Input
            title='Pay to:'
            icon='qr'
            size='lg'
          />
        </div>

        <div className="form-row">
          <Input
            title='Label:'
            size='lg'
          />
        </div>

        <div className="page-row-lg">
          <InputWithSelect
            title='Amount:'
            placeholder='0.00'
            options={options}
            extended
          />
        </div>

        <div className="page-row-md">
          <Bar
            title='Fee'
            options={feeOptions}
          />
        </div>

        <div className='page-row-lg'>
          <RateRangeSlider />
        </div>

        <div className="page-row-md">
          <InputWithSelect
            title='Fee:'
            placeholder='0.00'
            options={options}
          />
        </div>

        <Button variant='default'>
          Create Transaction
        </Button>
      </div>
    </div>
  )
}
