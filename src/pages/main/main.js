import React from 'react';
import styles from './main.module.css';
import {Transaction, Menu, Header, Bar} from '../../components';
import {Area, AreaChart, CartesianGrid, XAxis, YAxis} from "recharts";

/* mock logotypes */
import dash from '../../assets/images/dash.png';
import dot from '../../assets/images/dot.png';
import logo from '../../assets/images/logo.png';
import Svg from "../../svgs/Svg";

export const Main = () => {
  const mockTransactions = [
    {
      logo: dash,
      title: 'Dash',
      subtitle: 'Dash',
      chart: [
        { name: "1", value: 3 },
        { name: "2", value: 1 },
        { name: "3", value: 5 },
        { name: "4", value: 2 },
        { name: "5", value: 6 },
        { name: "6", value: 2 },
      ],
      chartColor: '#3DA0E3',
      info1: '$29',
      info2: '+7.5%',
      infoDirection: 'green',
    },
    {
      logo: dot,
      title: 'Dot',
      subtitle: 'Polkadot',
      chart: [
        { name: "1", value: 10 },
        { name: "2", value: 2 },
        { name: "3", value: 7 },
        { name: "4", value: 2 },
        { name: "5", value: 7 },
        { name: "6", value: 5 },
      ],
      chartColor: '#E6007A',
      info1: '$29',
      info2: '-7.5%',
      infoDirection: 'red',
    },

    {
      logo: dash,
      title: 'Dash',
      subtitle: 'Dash',
      chart: [
        { name: "1", value: 3 },
        { name: "2", value: 1 },
        { name: "3", value: 5 },
        { name: "4", value: 2 },
        { name: "5", value: 6 },
        { name: "6", value: 2 },
      ],
      chartColor: '#3DA0E3',
    },
    {
      logo: dot,
      title: 'Dot',
      subtitle: 'Polkadot',
      chart: [
        { name: "1", value: 10 },
        { name: "2", value: 2 },
        { name: "3", value: 7 },
        { name: "4", value: 2 },
        { name: "5", value: 7 },
        { name: "6", value: 5 },
      ],
      chartColor: '#E6007A',
    },

    {
      type: 'send',
      title: 'BTC',
      subtitle: '0xcafa...dd8f',
      chart: [
        { name: "1", value: 3 },
        { name: "2", value: 1 },
        { name: "3", value: 5 },
        { name: "4", value: 2 },
        { name: "5", value: 6 },
        { name: "6", value: 2 },
      ],
      chartColor: '#3DA0E3',
      info1: '$29',
      info2: '22.01.2023',
    },
    {
      type: 'receive',
      title: 'BTC',
      subtitle: '0xcafa...dd8f',
      chart: [
        { name: "1", value: 10 },
        { name: "2", value: 2 },
        { name: "3", value: 7 },
        { name: "4", value: 2 },
        { name: "5", value: 7 },
        { name: "6", value: 5 },
      ],
      chartColor: '#E6007A',
      info1: '$29',
      info2: '22.01.2023',
    },
  ];

  const mockChartData = [
    { name: "1", value: 80, date: '4 Aug'},
    { name: "2", value: 380, date: '5 Aug' },
    { name: "3", value: 340, date: '6 Aug' },
    { name: "4", value: 180, date: '10 Aug' },
    { name: "5", value: 250, date: '15 Aug' },
    { name: "6", value: 400, date: '23 Aug' },
  ];

  const mockOptions = [
    { title: 'SATS' },
    { title: 'USD' },
    { title: 'BTC' },
  ];

  const menuLinks = [
    {
      icon: 'menu-wallet',
      title: 'Transactions',
    },
    {
      icon: 'menu-item-2',
      title: 'Whirlpool',
    },
    {
      icon: 'menu-item-3',
      title: 'UTXOs',
    },
    {
      icon: 'menu-item-4',
      title: 'Settings',
    },
  ];

  const actionsLinks = [
    {
      icon: 'menu-wallet',
      title: 'Transactions',
    },
    {
      icon: 'menu-send',
      title: 'Send',
    },
    {
      icon: 'menu-rec',
      title: 'Receive',
    },
  ]

  return (
    <div className='page'>
      <Header title='Transactions' woArrow />
      <div className='page-inner'>
        <div className={styles.header}>
          <div className={styles.header_block}>
            <img src={logo} alt="Sparrow" />
            <span>Sparrow Wallet</span>
          </div>
          <Bar
            variant='inline'
            options={mockOptions}
          />
        </div>
        <div className={styles.inner}>
          <div className={styles.backdrop}>
            <div className={styles.header_row}>
              <div className={styles.header_col}>
                <div className={styles.header_title}>Balance:</div>
                <div className={styles.header_subtitle}>
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

            <div className={styles.inner_row}>
              <Menu data={actionsLinks} variant='blue' />
            </div>

            <div className={styles.content}>
              {mockTransactions && mockTransactions.length ? (
                mockTransactions.map((item, i) =>
                  <Transaction data={item} key={i} index={i} />
                )
              ) : (
                <div className={styles.empty}>No transactions yet</div>
              )}
            </div>
          </div>

          <div className={styles.bar}>
            <Menu data={menuLinks} />
          </div>
        </div>
      </div>
    </div>
  )
}
