import React from 'react';
import classNames from 'classnames/bind';
import styles from './Digits.module.css'
import {useState} from "react";

export const Digits = ({ className, label, name, onChange }) => {
  const inputClasses = classNames(styles.digits, className);

  const [activeInputs, setActiveInputs] = useState([]);
  const [inputValues, setInputValues] = useState({});

  const handleFocus = (index) => {
    setActiveInputs(prevActiveInputs => [...prevActiveInputs, index]);
  };

  const handleBlur = (index) => {
    setActiveInputs(prevActiveInputs => prevActiveInputs.filter(i => i !== index));
  };

  const handleChange = (event, index) => {
    setInputValues({
      ...inputValues,
      [index]: event.target.value,
    });
  };


  return (
    <div className={inputClasses}>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <div className={styles.inner}>
        {[...Array(6)].map((_, index) => {
          const hoverClasses = activeInputs.includes(index) ? styles.hover : '';
          const activeClasses = inputValues[index] ? styles.active : '';

          return (
            <div
              className={classNames(styles.wrapper, hoverClasses, activeClasses)}
              key={index}
            >
              <input
                type="password"
                className={styles.input}
                id={name}
                name={name}
                maxLength='1'
                onChange={event => handleChange(event, index)}
                value={inputValues[index] || ''}
                onFocus={() => handleFocus(index)}
                onBlur={() => handleBlur(index)}
              />
            </div>
          )
        })}
      </div>
    </div>
  );
}
