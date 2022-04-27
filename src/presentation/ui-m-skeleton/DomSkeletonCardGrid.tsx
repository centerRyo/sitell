import React from 'react'
import { DomShimmer } from '../ui-a-shimmer/DomShimmer'
import { DomSkeleton } from './DomSkeleton'
import styles from './dup-skeleton-card-grid.m.scss'

export const DomSkeletonCardGrid: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <DomSkeleton type="thumbnail" className={styles} />
        </div>
        <div className={styles.right}>
          <DomSkeleton type="title" className={styles} />
          {[1, 2, 3].map(n => (
            <DomSkeleton key={n} type="text" className={styles} />
          ))}
        </div>
      </div>
      <DomShimmer />
    </div>
  )
}
