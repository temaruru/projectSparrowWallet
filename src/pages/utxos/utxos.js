import React from 'react';
import styles from './utxos.module.css'
import { Header } from '../../components';
import {
  AreaChart,
  Area,
  CartesianGrid,
  YAxis, XAxis,
} from "recharts";
import Svg from "../../svgs/Svg";

export const Utxos = () => {
  const mockChartData = [
    { name: "1", value: 600000 },
    { name: "2", value: 600000 },
    { name: "3", value: 600000 },
  ];

  return (
    <div className='page'>
      <Header title='UTXOs' />
      <div className='page-inner'>
        <div className={styles.title}>Unspent Transaction Outputs</div>

        <div className={styles.header_row}>
          <div className={styles.header_col}>
            <div className={styles.header_title}>Balance:</div>
            <div className={styles.header_subtitle}>
              <div className={styles.header_digits}>923.56 <span>USD</span></div>
              <div className={styles.header_digits}>923.56 <span>USD</span></div>
            </div>
            <div className={styles.header_info}>
              Mempool: 0 USD
            </div>
            <div className={styles.header_info}>
              Transactions: 0 <Svg type='arrow-down' />
            </div>
          </div>

          <div className={styles.chart}>
            <AreaChart
              width={250}
              height={94}
              data={mockChartData}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="value" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3DA0E3" stopOpacity={0.5} />
                  <stop offset="95%" stopColor="#3DA0E3" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="2"
                strokeOpacity={1}
                vertical={false}
                stroke='#F3F3F3'
              />
              <XAxis
                dataKey="date"
                tick={{ fill: '#C5C5C5', fontSize: '10px' }}
                axisLine={{ strokeWidth: 0 }}
              />
              <YAxis
                dataKey="value"
                tick={{ fill: '#C5C5C5', fontSize: '10px' }}
                axisLine={{ strokeWidth: 0 }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#3DA0E3"
                fillOpacity={1}
                fill="url(#value)"
              />
            </AreaChart>
          </div>
        </div>


        <div className={styles.row}>
          <div className={styles.left}>Data:</div>
          <div className={styles.right}>2022.04.01 08:26</div>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>Output:</div>
          <div className={styles.right}>5bfd1334..:8</div>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>Address:</div>
          <div className={styles.right}>bc1qhwealuyddv808hv0..</div>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>Label:</div>
          <div className={styles.right}></div>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>Value:</div>
          <div className={styles.right}>660.420</div>
        </div>
      </div>
    </div>
  )
}
