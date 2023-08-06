import React from 'react';
import { Header, ItemBlock, Checkbox } from '../../components';

export const Threshold = () => {
  const pageItems = [
    {
      title: '',
      list: [
        {
          id: 'manage0',
          title: '5%',
          children:
            <Checkbox
              type='radio'
              variant='line'
              id='manage0'
              name='manage-list'
            />,
        },
        {
          id: 'manage1',
          title: '8%',
          children:
            <Checkbox
              type='radio'
              variant='line'
              id='manage1'
              name='manage-list'
            />,
        },
        {
          id: 'manage2',
          title: '10%',
          children:
            <Checkbox
              type='radio'
              variant='line'
              id='manage2'
              name='manage-list'
            />,
        },
      ]
    }
  ];

  return (
    <div className='page'>
      <Header title='Manage Threshold' />
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
