import React from 'react';
import styles from './connectedSites.module.css'
import {Header, Input, Button, Popup, SubHeader} from '../../components';
import Svg from "../../svgs/Svg";

export const ConnectedSites = () => {

  return (
    <div className='page'>
      <Header title='Connected Sites' />
      <div className='page-inner page'>
        <div className={styles.actions}>
          <Button variant='bar' icon='plus'>
            Add
          </Button>
          <Button variant='bar' icon='qr'>
            Scan
          </Button>
        </div>
        <SubHeader
          title='WalletConnect'
          icon='wallet-logo'
        />
        <div className={styles.info}>
          <Svg type='scan' />
          Scan to Connect
        </div>
        <div className={styles.title}>Connected Sites</div>
        <div className={styles.content}>
          <div className={styles.content_empty}>
            <Svg type='inbox' />
            <span>No Connected sites</span>
            <div>Creating neew connection with dApps.</div>
          </div>
        </div>
      </div>

      {/*Модалка*/}
      <div>
        <Popup
          title='Add new connection'
          type='warning'
          typeIcon='connected'
          label='Add connection'
        >
          <div className="page-row">
            <Input
              title='Add Site Connection'
              placeholder='Start with "wc:" or "https://"'
              size='lg'
            />
          </div>
          <div className="page-actions">
            <Button variant='inline'>
              Cancel
            </Button>
            <Button variant='default'>
              Add
            </Button>
          </div>
        </Popup>
      </div>
    </div>
  )
}
