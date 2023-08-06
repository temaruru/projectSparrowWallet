import React from 'react';
import { Header, ItemBlock, Checkbox } from '../../components';

export const Currency = () => {
  const pageItems = [
    {
      title: '',
      list: [
        {
          id: 'cur0',
          title: 'USD',
          children:
            <Checkbox
              type='radio'
              variant='line'
              id='cur0'
              name='list'
            />,
        },
        {
          id: 'cur1',
          title: 'BTC',
          children:
            <Checkbox
              type='radio'
              variant='line'
              id='cur1'
              name='list'
            />,
        },
        {
          id: 'cur2',
          title: 'CNY',
          children:
            <Checkbox
              type='radio'
              variant='line'
              id='cur2'
              name='list'
            />,
        },
        {
          id: 'cur3',
          title: 'JPY',
          children:
            <Checkbox
              type='radio'
              variant='line'
              id='cur3'
              name='list'
            />,
        },
        {
          id: 'cur4',
          title: 'HKD',
          children:
            <Checkbox
              type='radio'
              variant='line'
              id='cur4'
              name='list'
            />,
        },
      ]
    }
  ];

  return (
    <div className='page'>
      <Header title='Currency' />
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
