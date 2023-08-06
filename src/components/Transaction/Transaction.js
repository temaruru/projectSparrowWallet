import React from 'react';
import styles from './Transaction.module.css'
import { Box, Chart } from "../";
import Svg from "../../svgs/Svg";

import btc from '../../assets/images/btc-ico.png';
import classNames from "classnames/bind";

export const Transaction = ({ data, index }) => {
  return (
    <Box className={styles.box}>
      <div className={styles.inner}>
        {data.type ? (
          <div className={classNames(styles.logo_arrow, data.type === 'receive' ? styles.logo_arrow_rec : '')}>
            <Svg type='arrow' />
            <img
              src={btc}
              alt='Transaction'
            />
          </div>
        ) : (
          <div className={styles.logo}>
            <img src={data.logo} alt={data.title} />
          </div>
        )}
        <div className={styles.name}>
          {data.title}
          <span>{data.subtitle}</span>
        </div>
        {!data.type && (
          <div className={styles.chart}>
            <Chart
              id={index}
              data={data.chart}
              chartWidth={data.info1}
              color={data.chartColor}
            />
          </div>
        )}
        {data.info1 && (
          <div className={styles.info}>
            {data.info1}
            <span className={data.infoDirection === 'green' ? styles.green : data.infoDirection === 'red' ? styles.red : ''}>{data.info2}</span>
          </div>
        )}
      </div>
    </Box>
  );
}
