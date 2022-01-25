import React from 'react'
import { DupLabelCard } from '../ui-a-label/DupLabelCard'
import { DupTitle, DupTitleTypes } from '../ui-c-title/DupTitle'
import { DomCard } from '../ui-m-card/DomCard'
import { DupFooter } from '../ui-o-footer/DupFooter'
import { DomHeader } from '../ui-o-header/DomHeader'
import { DomPageItems } from './DomPageItems'

export const DupPageMasterpiece: React.FC = () => {
  const contents = [
    <DomCard
      id={1}
      image="https://www.gstatic.com/webp/gallery3/1.png"
      label={{
        render: () => <DupLabelCard text="数学" />
      }}
      text="サンプルタイトルサンプルタイトルサンプルタイトル"
    />,
    <DomCard
      id={1}
      image="https://www.gstatic.com/webp/gallery3/1.png"
      label={{
        render: () => <DupLabelCard text="農学・食品科学" />
      }}
      text="サンプルタイトルサンプルタイトルサンプルタイトル"
    />,
  ]
  const topic = 'sitell登録後の今だからこそ読んでおきたい厳選の論文10本をご用意しました。どの論文の要約を読もうか迷ったらぜひこの10本をご覧ください。'

  return (
    <DomPageItems
      header={{ render: () => <DomHeader /> }}
      title={{ render: () => <DupTitle type={DupTitleTypes.MasterPiece} />}}
      topic={topic}
      contents={contents}
      footer={{ render: () => <DupFooter /> }}
    />
  )
}
