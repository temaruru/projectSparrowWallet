import React from 'react';
import {Button, Header, FormColumns, Checkbox, Popup, Input, SubHeader} from '../../components';
import styles from './mnemonicWords.module.css';
import Svg from '../../svgs/Svg';
import classNames from "classnames/bind";
import Actions from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {useState} from "react";

export const MnemonicWords = () => {
  const options = [
    "Use 12 Words",
    "Use 15 Words",
    "Use 18 Words",
    "Use 21 Words",
    "Use 24 Words",
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const closeTooltip = () => {
    setIsOpen(false);
  };
  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className='page'>
      <Header title='Mnemonic Words (BIP39)' />
      <div className='page-inner'>
        <SubHeader
          title='Mnemonics words'
          subtitle='Enter word list:'
        >
          <Actions
            defaultOpen={isOpen}
            onClose={closeTooltip}
            trigger={<div className={styles.trigger}>{selectedOption || "Select an option"}</div>}
            position="bottom center"
            className={styles.actions_wrap}
          >
            <div>
              {options.map((option, index) => (
                <div
                  key={index}
                  onClick={() => handleSelect(option)}
                  className={styles.action}
                >
                  {option}
                </div>
              ))}
              <div className={styles.action}>
                Scan QR
                <Svg type='qr' />
              </div>
            </div>
          </Actions>
        </SubHeader>
        
        <FormColumns inputsList={[
          'Juice',
          'Juice2',
          'Juice3',
          'Juice4',
          'Juice5',
          'Juice6',
          'Juice7',
          'Juice8',
          'Juice9',
          'Juice10',
          'Juice11',
          'Juice12',
          'Juice13',
          'Juice14',
          'Juice15',
          'Juice16',
          'Juice17',
          'Juice18',
        ]} />

        <div className={styles.actions}>
          <Checkbox
            type='checkbox'
            id='phrase'
            label='Use passphrase'
            variant='line'
          />

          <div className={classNames(styles.status, styles.status_green)}>
            <span className={styles.status_text}>Valid checksum</span>
            <Svg type='check-circle' />
          </div>
        </div>

        <div className='page-row'>
          <Input
            placeholder='Type passphrase here'
            size='lg'
          />
        </div>

        <Button variant='default'>
          Import Wallet
        </Button>

        {/*Модалки*/}
        <div>
          <Popup
            type='warning'
            title='Add a passphrase?'
            label='Add a passphrase?'
          >
            <p className='popup-text'>
              A passphrase is not a password! Any variation entered in future loads a valid wallet, but with different addresses.
              <br/><br/>
              This feature provides optional added security for advanced users only.
              <span>Are you sure?</span>
            </p>
            <div className="page-actions">
              <Button variant='inline'>
                No
              </Button>
              <Button variant='default'>
                Ok
              </Button>
            </div>
          </Popup>
        </div>
      </div>
    </div>
  )
}
