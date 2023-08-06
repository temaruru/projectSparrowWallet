import React from 'react';
import { Header, ItemBlock, Checkbox } from '../../components';

export const Sound = () => {
  const pageItems = [
    {
      title: '',
      list: [
        {
          id: 'sound',
          title: 'Vibrate',
          children:
            <Checkbox
              type='radio'
              variant='line'
              id='sound'
              name='list'
            />,
        },
      ]
    }
  ];

  return (
    <div className='page'>
      <Header title='Sound & Vibration ' />
      <div className='page-inner'>
        {pageItems.map((group, index) => (
          <div className='list-group' key={index}>
            {group.title && <div className='list-title'>{group.title}</div>}
            {group.list.map((item) => (
              <ItemBlock content={item} key={item.id} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
