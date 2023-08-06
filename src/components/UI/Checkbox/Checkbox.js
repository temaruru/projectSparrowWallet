import React from 'react';
import { useState } from 'react';
import Svg from '../../../svgs/Svg';
import classNames from 'classnames/bind';
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import styles from './Checkbox.module.css'

export const Checkbox = ({ type, name, value, variant, id, label, tooltip, subtext }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleInputChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const variants = {
    boxed: styles.outlined,
    boxed_inline: styles.inline,
    line: styles.line,
  }

  const inputClasses = classNames(styles.checkbox, variants[variant], (type === 'radio' ? styles.radio : ''));

  return (
    <>
      <div className={inputClasses}>
        <input
          type={type}
          className={styles.input}
          id={id}
          name={name}
          value={value}
          checked={isChecked}
          onChange={handleInputChange}
        />

        <label htmlFor={id} className={styles.label}>{label}</label>

        {tooltip &&
          <>
            <div className={styles.tooltip} data-tooltip-content={tooltip}>
              <Svg type='question-circle' />
            </div>
            <Tooltip anchorSelect="[data-tooltip-content]" />
          </>
        }
      </div>

      {subtext && isChecked ?
        <div className={styles.subtext}>{subtext}</div>
        : ''}
    </>
  );
}
