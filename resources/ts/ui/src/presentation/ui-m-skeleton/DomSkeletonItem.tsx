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
      <DomSkeleton type='title' />
      <DomSkeleton type='thumbnail' />
      <DomSkeleton type='text' />
      <DomSkeleton type='text' />
      <DomSkeleton type='text' />
      <DomSkeleton type='text' />
      <DomSkeleton type='text' />
      <DomSkeleton type='text' />
      <DomSkeleton type='text' />
      <DomSkeleton type='text' />

      <DomShimmer />
    </div>
  )
}
