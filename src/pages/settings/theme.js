import React from 'react';
import { Header, ItemBlock, Checkbox } from '../../components';

export const Theme = () => {
  const pageItems = [
    {
      title: '',
      list: [
        {
          id: '0',
          title: 'Auto',
          children:
            <Checkbox
              type='radio'
              variant='line'
              id='0'
              name='list'
            />,
        },
        {
          id: '1',
          title: 'Light',
          children:
            <Checkbox
              type='radio'
              variant='line'
              id='1'
              name='list'
            />,
        },
        {
          id: '2',
          title: 'Dark',
          children:
            <Checkbox
              type='radio'
              variant='line'
              id='2'
              name='list'
            />,
        },
      ]
    }
  ];

  return (
    <div className='page'>
      <Header title='Theme' />
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
