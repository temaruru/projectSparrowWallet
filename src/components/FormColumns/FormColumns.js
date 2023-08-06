import React from 'react';
import styles from './FormColumns.module.css'
import { Input } from "../";

export const FormColumns = ({ inputsList, inputsListOnce }) => {
  if (inputsList) {
    var halfList = Math.floor(inputsList.length / 2);
    var firstColumn = inputsList.slice(0, halfList);
    var secondColumn = inputsList.slice(halfList);
  }

  return (
    <div className={styles.box}>
      {inputsList ? (
        <div className={styles.inner_row}>
          <div className={styles.inner_col}>
            {firstColumn.map((item, i) =>
              <div className={styles.item} key={'0' + i}>
                <span className={styles.item_index}>{i + 1}.</span>
                <Input placeholder={item} />
              </div>
            )}
          </div>
          <div className={styles.inner_col}>
            {secondColumn.map((item, i) =>
              <div className={styles.item} key={i}>
                <span className={styles.item_index}>{i + halfList + 1}.</span>
                <Input placeholder={item} />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className={styles.inner_row_once}>
          <div className={styles.inner_col}>
            {inputsListOnce.map((item, i) =>
              <div key={i}>
                <div className={styles.label}>Enter a recovery word {i + 1}</div>
                <div className={styles.item} key={i}>
                  <span className={styles.item_index}>{i + 1}.</span>
                  <Input placeholder={item} />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
