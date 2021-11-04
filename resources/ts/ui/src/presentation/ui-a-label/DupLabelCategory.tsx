import React from 'react'
import { DomLabel } from './DomLabel'
import categoryClassNames from './dup-label-category.m.scss'

type Props = {
  text: string,
}

export const DupLabelCategory: React.FC<Props> = ({ text }) => {
  return (
    <DomLabel
      text={text}
      classNames={categoryClassNames}
    />
  )
}
