import React from 'react'
import { DomShimmer } from '../ui-a-shimmer/DomShimmer'
import { DomSkeleton } from './DomSkeleton'
import styles from './dup-skeleton-category.m.scss'

export const DomSkeletonCategory: React.FC = () => {
  return (
    <div className={styles.root}>
      <DomSkeleton type='title' className={styles} />
      <DomShimmer />
    </div>
  )
}
