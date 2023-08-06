import React from 'react';
import { Header, ItemBlock, Checkbox } from '../../components';

export const Language = () => {
  const pageItems = [
    {
      title: '',
      list: [
        {
          id: 'lang0',
          title: 'Auto',
          children:
            <Checkbox
              type='radio'
              variant='line'
              id='lang0'
              name='list'
            />,
        },
        {
          id: 'lang1',
          title: 'English',
          children:
            <Checkbox
              type='radio'
              variant='line'
              id='lang1'
              name='list'
            />,
        },
        {
          id: 'lang2',
          title: '简体中文',
          children:
            <Checkbox
              type='radio'
              variant='line'
              id='lang2'
              name='list'
            />,
        },
        {
          id: 'lang3',
          title: '繁體中文',
          children:
            <Checkbox
              type='radio'
              variant='line'
              id='lang3'
              name='list'
            />,
        },
        {
          id: 'lang4',
          title: '日本語',
          children:
            <Checkbox
              type='radio'
              variant='line'
              id='lang4'
              name='list'
            />,
        },
        {
          id: 'lang5',
          title: '한국어',
          children:
            <Checkbox
              type='radio'
              variant='line'
              id='lang5'
              name='list'
            />,
        },
        {
          id: 'lang6',
          title: 'বাংলা',
          children:
            <Checkbox
              type='radio'
              variant='line'
              id='lang6'
              name='list'
            />,
        },
        {
          id: 'lang7',
          title: 'Deutsch',
          children:
            <Checkbox
              type='radio'
              variant='line'
              id='lang7'
              name='list'
            />,
        },
        {
          id: 'lang8',
          title: 'Filipino',
          children:
            <Checkbox
              type='radio'
              variant='line'
              id='lang8'
              name='list'
            />,
        },
      ]
    }
  ];

  return (
    <div className='page'>
      <Header title='Language' />
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
