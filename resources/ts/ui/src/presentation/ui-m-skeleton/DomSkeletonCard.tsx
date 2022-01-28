import React from 'react'
import { DomShimmer } from '../ui-a-shimmer/DomShimmer'
import { DomSkeleton } from './DomSkeleton'
import styles from './dup-skeleton-card.m.scss'

export const DomSkeletonCard: React.FC = () => {
  return (
    <div className={styles.root}>
      <DomSkeleton type="thumbnail" className={styles} />
      <DomSkeleton type="title" className={styles} />
      {[1, 2, 3].map(n => (
        <DomSkeleton key={n} type="text" className={styles} />
      ))}
      <DomShimmer />
    </div>
  )
}
