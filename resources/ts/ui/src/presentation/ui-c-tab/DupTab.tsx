import React from 'react'
import { DupButton, DupButtonTypes } from '../ui-a-button/DupButton'
import { DomTab } from './DomTab'

export const DupTab: React.FC = () => {
  const buttons = [
    <DupButton type={DupButtonTypes.Weekly} />,
    <DupButton type={DupButtonTypes.Monthly} />,
  ]
  return (
    <DomTab
      buttons={buttons}
    />
  )
}
