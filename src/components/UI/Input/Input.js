import React from 'react';
import classNames from 'classnames/bind';
import styles from './Input.module.css'
import Svg from '../../../svgs/Svg';

export const Input = (props) => {
  const sizes = {
    lg: styles.large,
  }

  const inputClasses = classNames(
    styles.inner,
    sizes[props.size],
    props.className,
    props.iconAlign ? styles.icon_align : '',
  );

  return (
    <>
      {props.title && (
        <div className={styles.title}>
          {props.title}
          {props.icon ?
            <Svg type={props.icon} />
            : ''}
        </div>
      )}
      <div className={inputClasses}>
        <input
          type="text"
          placeholder={props.placeholder}
          className={classNames(styles.input, props.className)}
          maxLength={props.maxLength}
          ref={props.inputRef}
          value={props.inputValue}
          onChange={props.handleChange}
        />
      </div>
    </>
  );
}
