import React from 'react';
import { Header, ItemBlock, Checkbox } from '../../components';

export const Timer = () => {
  const pageItems = [
    {
      title: '',
      list: [
        {
          id: 'timer0',
          title: 'Always',
          children:
            <Checkbox
              type='radio'
              variant='line'
              id='timer0'
              name='list'
            />,
        },
        {
          id: 'timer1',
          title: '1 Minutes',
          children:
            <Checkbox
              type='radio'
              variant='line'
              id='timer1'
              name='list'
            />,
        },
        {
          id: 'timer2',
          title: '5 Minutes',
          children:
            <Checkbox
              type='radio'
              variant='line'
              id='timer2'
              name='list'
            />,
        },
        {
          id: 'timer3',
          title: '30 Minutes',
          children:
            <Checkbox
              type='radio'
              variant='line'
              id='timer3'
              name='list'
            />,
        },
        {
          id: 'timer4',
          title: '1 Hour',
          children:
            <Checkbox
              type='radio'
              variant='line'
              id='timer4'
              name='list'
            />,
        },
        {
          id: 'timer5',
          title: '4 Hour',
          children:
            <Checkbox
              type='radio'
              variant='line'
              id='timer5'
              name='list'
            />,
        },
      ]
    }
  ];

  return (
    <div className='page'>
      <Header title='Auto-Lock Timer' />
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
