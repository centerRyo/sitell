import React from 'react'
import { DupLabelCategory } from '../ui-a-label/DupLabelCategory'
import { DupTitle, DupTitleTypes } from '../ui-c-title/DupTitle'
import { DupFooter } from '../ui-o-footer/DupFooter'
import { DomHeader } from '../ui-o-header/DomHeader'

export const Top: React.FC = () => {
  return (
    <>
      <DomHeader />
      <DupTitle type={DupTitleTypes.MasterPiece} />
      <DupLabelCategory text="数学" />
      <DupFooter />
    </>
  )
}
