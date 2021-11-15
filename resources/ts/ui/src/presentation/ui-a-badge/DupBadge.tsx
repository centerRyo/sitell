import React from 'react'
import { DomBadge } from './DomBadge'
import defaultClassNames from './dup-badge-default.m.scss'
import GoldClassNames from './dup-badge-gold.m.scss'
import SilverClassNames from './dup-badge-silver.m.scss'
import BronzeClassNames from './dup-badge-bronze.m.scss'

type Props = {
  type: string,
  number: number,
}

export const DupBadgeTypes = {
  Gold: 'gold',
  Silver: 'silver',
  Bronze: 'bronze',
  Other: 'other',
}

export const DupBadge: React.FC<Props> = ({
  type,
  number
}) => {
  // TODO: 実装がダサい。要リファクタリング
  const targets = [
    {
      type: DupBadgeTypes.Gold,
      className: GoldClassNames,
    },
    {
      type: DupBadgeTypes.Silver,
      className: SilverClassNames,
    },
    {
      type: DupBadgeTypes.Bronze,
      className: BronzeClassNames,
    },
    {
      type: DupBadgeTypes.Other,
      className: defaultClassNames,
    },
  ]
  const target = targets.filter((t) => t.type === type)

  return (
    <DomBadge
      number={number}
      classNames={target[0].className}
    />
  )
}
