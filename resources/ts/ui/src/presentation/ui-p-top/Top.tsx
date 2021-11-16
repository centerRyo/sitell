import React from 'react'
import { DupBadge, DupBadgeTypes } from '../ui-a-badge/DupBadge'
import { DupLabelCard } from '../ui-a-label/DupLabelCard'
import { DupLabelCategory } from '../ui-a-label/DupLabelCategory'
import { DupTab } from '../ui-c-tab/DupTab'
import { DupTitle, DupTitleTypes } from '../ui-c-title/DupTitle'
import { DomCard } from '../ui-m-card/DomCard'
import { DupFooter } from '../ui-o-footer/DupFooter'
import { DomHeader } from '../ui-o-header/DomHeader'

export const Top: React.FC = () => {
  return (
    <>
      <DomHeader />
      <DupTitle type={DupTitleTypes.MasterPiece} />
      <DupLabelCategory text="数学" />
      <DupTab />
      <DomCard
        badge={{
          render: () => <DupBadge number={1} type={DupBadgeTypes.Gold} />
        }}
        image="https://www.gstatic.com/webp/gallery3/1.png"
        label={{
          render: () => <DupLabelCard text="数学" />
        }}
        text="サンプルタイトルサンプルタイトルサンプルタイトル"
      />
      <DupFooter />
    </>
  )
}
