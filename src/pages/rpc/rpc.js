import React from 'react';
import { Header, ItemBlock, Checkbox, Button, Item, Popup, Input } from '../../components';

export const Rpc = () => {
  const pageItems = [
    {
      title: 'Default',
      list: [
        {
          id: '91',
          title: 'https://eth-mainnet.gateway.pokt.network/sdsdsdsdsds',
          children:
            <Checkbox
              type='radio'
              variant='line'
              id='rpc0'
              name='rpc-list'
            />,
          info: {
            ms: '102ms',
            height: 'Height: 16885049',
            status: 'green',
          },
        },
        {
          id: '92',
          title: 'https://mainnet-eth.compound.finance',
          children:
            <Checkbox
              type='radio'
              variant='line'
              id='rpc1'
              name='rpc-list'
            />,
          info: {
            ms: '102ms',
            height: 'Height: 16885049',
            status: 'green',
          },
        },
        {
          id: '93',
          title: 'https://rpc.flashbots.net',
          children:
            <Checkbox
              type='radio'
              variant='line'
              id='rpc2'
              name='rpc-list'
            />,
          info: {
            ms: '102ms',
            height: 'Height: 16885049',
            status: 'green',
          },
        },
        {
          id: '94',
          title: 'https://rpc.ankr.com/eth',
          children:
            <Checkbox
              type='radio'
              variant='line'
              id='rpc3'
              name='rpc-list'
            />,
          info: {
            ms: '102ms',
            height: 'Height: 16885049',
            status: 'green',
          },
        },
        {
          id: '95',
          title: 'https://1rpc.io/eth',
          children:
            <Checkbox
              type='radio'
              variant='line'
              id='rpc4'
              name='rpc-list'
            />,
          info: {
            ms: '102ms',
            height: 'Height: 16885049',
            status: 'green',
          },
        },
        {
          id: '96',
          title: 'https://cloudflare-eth.com',
          children:
            <Checkbox
              type='radio'
              variant='line'
              id='rpc5'
              name='rpc-list'
            />,
          info: {
            ms: '927ms',
            height: 'Height: 16885049',
            status: 'yellow',
          },
        },
        {
          id: '97',
          title: 'https://api.mycryptoapi.com/eth',
          children:
            <Checkbox
              type='radio'
              variant='line'
              id='rpc6'
              name='rpc-list'
            />,
          info: {
            ms: 'Not Available',
            height: 'Height: 16885049',
            status: 'red',
          },
        },
      ]
    }
  ];

  return (
    <div className='page'>
      <Header title='RPC Node' />
      <div className='page-inner'>
        <Item
          title='Whats the "Height" of nodes?'
          text='The larger number of height means that the nodes have more stable and in-time synchronization. When the nodes are connected at similar speeds, it is recommended to choose the one which has a higher height.'
        />

        <div className='list-group'>
          <div className='list-title page-row-md'>Custom</div>
          <Button variant='default'>
            Add Custom Node
          </Button>
        </div>

        {pageItems.map((group, index) => (
          <div className='list-group' key={index}>
            <div className='list-title'>{group.title}</div>
            {group.list.map((item) => (
              <ItemBlock variant='inline' content={item} key={item.id} />
            ))}
          </div>
        ))}

        {/*Модалка*/}
        <div>
          <Popup
            title='Add Custom Node'
            type='warning'
            label='Add Custom Node'
          >
            <div className="page-row">
              <Input
                title='Add node'
                placeholder='https://'
                size='lg'
              />
            </div>
            <div className="page-actions">
              <Button variant='inline'>
                Cancel
              </Button>
              <Button variant='default'>
                Confirm
              </Button>
            </div>
          </Popup>

          <Popup
            type='warning'
            title='Restart Required'
            titleTextStyled
            text='To finish switching the RPC node, Arbitrum needs to restart.'
            label='Restart Required'
          >
            <div className="page-actions">
              <Button variant='inline'>
                Cancel
              </Button>
              <Button variant='default'>
                Restart
              </Button>
            </div>
          </Popup>
        </div>
      </div>
    </div>
  )
}
