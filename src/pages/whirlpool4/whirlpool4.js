import React from 'react';
import styles from './whirlpool4.module.css'
import { Header, Input, InputWithSelect, Bar, Button, RateRangeSlider } from '../../components';
import Svg from "../../svgs/Svg";
import { LineChart, CartesianGrid, YAxis, Line } from "recharts";

export const Whirlpool4 = () => {
  const options = [
    { value: 'usd', label: 'USD' },
    { value: 'rub', label: 'RUB' },
    { value: 'try', label: 'TRY' },
  ];

  const feeOptions = [
    { title: 'Target Blocks' },
    { title: 'Mempool Size' },
  ];

  const optimizeOptions = [
    { title: 'Efficiency' },
    { title: 'Privacy' },
  ];

  const mockChartData = [
    { name: "1", first: 1, second: 1, third: 1, fourth: 1},
    { name: "2", first: 1, second: 1, third: 1, fourth: 1},
    { name: "3", first: 5, second: 5.2, third: 5.4, fourth: 5.6},
    { name: "4", first: 5.1, second: 5.3, third: 5.6, fourth: 5.8},
    { name: "5", first: 12, second: 12.5, third: 13, fourth: 13.2},
    { name: "6", first: 12.2, second: 12.6, third: 13.2, fourth: 13.5},
    { name: "7", first: 13.5, second: 13.6, third: 13.8, fourth: 14},
  ];

  const customTickFormatter = (tickValue) => {
    return `${tickValue} kvB`;
  };

  return (
    <div className='page'>
      <Header title='Send' />
      <div className='page-inner'>
        <div className="form-row">
          <Input
            title='Pay to:'
            placeholder='Pay to'
            icon='qr'
            iconAlign
            size='lg'
          />
        </div>

        <div className="form-row">
          <Input
            title='Label:'
            placeholder='Label'
            size='lg'
          />
        </div>

        <div className="page-row-lg">
          <InputWithSelect
            title='Amount'
            placeholder='0.00'
            options={options}
            extended
          />
        </div>

        <div className="page-row-md">
          <Bar
            title='Fee'
            options={feeOptions}
          />
        </div>

        <div className={styles.chart}>
          <LineChart
            width={350}
            height={105}
            data={mockChartData}
            margin={{ top: 0, right: 0, left: -19, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="2"
              strokeOpacity={0.9}
              vertical={false}
              stroke='#C5C5C5'
            />
            <YAxis
              dataKey="fourth"
              tick={{ fill: '#C5C5C5', fontSize: '10px' }}
              axisLine={{ strokeWidth: 0 }}
              tickFormatter={customTickFormatter}
              domain={[0, 'dataMax + 1']}
            />
            <Line type="linear" dot={false} dataKey="first" stroke="#E9A012" />
            <Line type="linear" dot={false} dataKey="second" stroke="#12E99C" />
            <Line type="linear" dot={false} dataKey="third" stroke="#4A12E9" />
            <Line type="linear" dot={false} dataKey="fourth" stroke="#A412E9" />
          </LineChart>
        </div>

        <div className='page-row-lg'>
          <RateRangeSlider />
        </div>

        <div className="page-row-md">
          <InputWithSelect
            title='Fee:'
            placeholder='Fee'
            options={options}
          />
        </div>

        <div className={styles.lines}>
          <div className={styles.lines_col}>
            <span>6b269ca0..:1</span>
            <span>19404dc4..:4</span>
            <span>3d98c98c..:1</span>
            <span>3d1125df..:2</span>
          </div>
          <div className={styles.lines_left}>
            <Svg type='lines' />
          </div>
          <div className={styles.lines_title}>Transactions</div>
          <div className={styles.lines_right}>
            <Svg type='lines' />
          </div>
          <div className={styles.lines_col}>
            <span>Spending P...</span>
            <span>tb1q2uhd...</span>
            <span>tb1qltwj...</span>
            <span>Fee...</span>
          </div>
        </div>

        <div className="page-actions">
          <Button variant='inline'>
            Cancel
          </Button>
          <Button variant='default'>
            Create Transaction
          </Button>
        </div>
      </div>
    </div>
  )
}
