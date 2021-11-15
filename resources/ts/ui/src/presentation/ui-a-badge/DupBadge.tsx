import React from 'react'
import { DomBadge } from './DomBadge'

type Props = {
  number: number,
}

export const DupBadge: React.FC<Props> = ({ number }) => {
  return (
    <DomBadge
      number={number}
    />
  )
}
