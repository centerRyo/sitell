import React from 'react'
import { DupLabelCard } from '../ui-a-label/DupLabelCard'
import { DupTitle, DupTitleTypes } from '../ui-c-title/DupTitle'
import { DomCard } from '../ui-m-card/DomCard'
import { DupFooter } from '../ui-o-footer/DupFooter'
import { DomHeader } from '../ui-o-header/DomHeader'
import { DomPageItems } from './DomPageItems'

export const DupPageLatest: React.FC = () => {
  const contents = [
    <DomCard
      image="https://www.gstatic.com/webp/gallery3/1.png"
      label={{
        render: () => <DupLabelCard text="数学" />
      }}
      text="サンプルタイトルサンプルタイトルサンプルタイトル"
    />,
    <DomCard
      image="https://www.gstatic.com/webp/gallery3/1.png"
      label={{
        render: () => <DupLabelCard text="農学・食品科学" />
      }}
      text="サンプルタイトルサンプルタイトルサンプルタイトル"
    />,
  ]
  return (
    <DomPageItems
      header={{ render: () => <DomHeader /> }}
      title={{ render: () => <DupTitle type={DupTitleTypes.Latest} />}}
      contents={contents}
      footer={{ render: () => <DupFooter /> }}
    />
  )
}
