import React from 'react';
import Svg from '../../svgs/Svg';
import styles from './ItemBlock.module.css'
import classNames from "classnames/bind";
import { Box } from "../UI/Box/Box";

export const ItemBlock = ({ content, id, variant }) => {
  const colors = {
    green: styles.green,
    yellow: styles.yellow,
    red: styles.red,
  };

  const variants = {
    inline: styles.inline,
  }

  const variantClasses = classNames(styles.block, variants[variant]);

  return (
    <Box className={variantClasses} key={id} style={{color: content.color}}>
      {content.icon &&
        <div className={styles.icon}>
          <Svg type={content.icon} />
        </div>
      }
      <div className={styles.inner}>
        <div
          style={{color: content.color}}
          className={classNames(styles.title, (content.info ? styles.title_sm : ''))}
        >
          {content.title}
        </div>
        {content.description ? (
          <div className={styles.subtitle}>{content.description}</div>
        ) : content.info ? (
          <div className={styles.info}>
            <div className={classNames(styles.indicator, colors[content.info.status])}>{content.info.ms}</div>
            <div className={styles.info_text}>{content.info.height}</div>
          </div>
        ) : ''}
      </div>
      {content.children ? (
        <div className={styles.content}>
          {content.children}
        </div>
      ) : (
        <div className={styles.col_right}>
          <div className={styles.selected}>{content.selectedText}</div>
          <div className={styles.icon_arrow}>
            <Svg type='arrow-right' />
          </div>
        </div>
      )}
    </Box>
  );
}
