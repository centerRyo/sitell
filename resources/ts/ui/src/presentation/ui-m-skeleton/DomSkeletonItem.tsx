import React from 'react'
import { DomShimmer } from '../ui-a-shimmer/DomShimmer'
import { DomSkeleton } from './DomSkeleton'
import ItemClassNames from './dup-skeleton-item.m.scss'

type Props = {
  classNames?: string,
}

export const DomSkeletonItem: React.FC<Props> = ({ classNames }) => {
  const styles = classNames || ItemClassNames

  return (
    <div className={styles.root}>
      <DomSkeleton type='title' className={styles} />
      <DomSkeleton type='thumbnail' className={styles} />
      {[1, 2, 3, 4, 5, 6, 7].map(n => (
        <DomSkeleton key={n} type="text" className={styles} />
      ))}
      <DomShimmer />
    </div>
  )
}
