import React from 'react';
import styles from './RateRangeSlider.module.css'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import {useState} from "react";
import classNames from "classnames/bind";

export const RateRangeSlider = ({ title }) => {
  const [value, setValue] = useState(0);

  const handleChange = (value) => {
    setValue(value);
  };

  const marks = {
    1: '1',
    2: '2',
    3: '4',
    4: '8',
    5: '16',
    6: '32',
    7: '64',
    8: '128',
    9: '256',
    10: '512',
    11: '1024',
  };

  const dotStyle = {
    width: '1px',
    height: '5px',
    background: '#FFFFFF',
    borderRadius: '0px 0px 4px 4px',
    border: 'none',
    bottom: '-10px',
  };

  const railStyle = {
    borderRadius: '4px',
    backgroundColor: '#FFCCDA',
    height: 8,
  };

  return (
    <>
      {title ? (
        <div className={styles.title}>{title}</div>
      ) : (
        <div className={styles.row}>
          <div>
            <div className={styles.row_label}>
              Range:
            </div>
          </div>
          <div className={styles.row_indicator}>
            High Priority
          </div>
        </div>
      )}
      <Slider
        defaultValue={8}
        value={value}
        onChange={handleChange}
        trackStyle={{ backgroundColor: '#D7EFFF', height: 8 }}
        handleStyle={{
          borderColor: '#3DA0E3',
          height: 14,
          width: 14,
          marginTop: -2,
          backgroundColor: '#3DA0E3',
          opacity: 1,
        }}
        railStyle={railStyle}
        min={1} max={11} marks={marks} step={null}
        dotStyle={dotStyle}
      />
      <div className={styles.row}>
        <div className={classNames(styles.row_label, styles.row_footer)}>
          Rate:
          <span>{marks[value]}.00 sats/vB</span>
        </div>
      </div>
    </>
  );
}
