import React from 'react'
import styles from './dup-shimmer-default.m.scss'

export const DomShimmer: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.shimmer}></div>
    </div>
  )
}
