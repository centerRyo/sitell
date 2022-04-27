import React from 'react'
import { DomLabel } from './DomLabel'
import cardClassNames from './dup-label-card.m.scss'

type Props = {
  text: string,
}

export const DupLabelCard: React.FC<Props> = ({ text }) => {
  return (
    <DomLabel
      text={text}
      classNames={cardClassNames}
    />
  )
}
