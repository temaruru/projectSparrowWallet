import React from 'react';
import styles from './PriorityRangeSlider.module.css'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import {useState} from "react";

export const PriorityRangeSlider = ({ title }) => {
  const [value, setValue] = useState(0);

  const handleChange = (value) => {
    setValue(value);
  };

  const marks = {
    1: 'Low',
    2: 'Normal',
    3: 'High',
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
    backgroundColor: '#fff',
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
              Premix Priority:
            </div>
          </div>
        </div>
      )}
      <Slider
        defaultValue={2}
        value={value}
        onChange={handleChange}
        trackStyle={{ backgroundColor: '#fff', height: 8 }}
        handleStyle={{
          borderColor: '#3DA0E3',
          height: 14,
          width: 14,
          marginTop: -2,
          backgroundColor: '#3DA0E3',
          opacity: 1,
        }}
        railStyle={railStyle}
        min={1} max={3} marks={marks} step={null}
        dotStyle={dotStyle}
      />
    </>
  );
}
