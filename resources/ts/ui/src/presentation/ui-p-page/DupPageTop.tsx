import React from 'react'
import { DupLabelCard } from '../ui-a-label/DupLabelCard'
import { DupLabelCategory } from '../ui-a-label/DupLabelCategory'
import { DupLink, DupLinkTypes } from '../ui-a-link/DupLink'
import { DupTitle, DupTitleTypes } from '../ui-c-title/DupTitle'
import { DomCard } from '../ui-m-card/DomCard'
import { DomCardGrid } from '../ui-m-card/DomCardGrid'
import { DupFooter } from '../ui-o-footer/DupFooter'
import { DomGroupCategory } from '../ui-o-group/DomGroupCategory'
import { DomGroupItems } from '../ui-o-group/DomGroupItems'
import { DupGroupItemsGrid } from '../ui-o-group/DupGroupItemsGrid'
import { DomHeader } from '../ui-o-header/DomHeader'
import { DomPageTop } from './DomPageTop'

export const DupPageTop: React.FC = () => {
  const groups = [
    <DomGroupItems
      title={{ render: () => <DupTitle type={DupTitleTypes.MasterPiece} /> }}
      cards={[
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
            render: () => <DupLabelCard text="新型コロナ" />
          }}
          text="サンプルタイトルサンプルタイトルサンプルタイトル"
        />,
      ]}
      link={{ render: () => <DupLink type={DupLinkTypes.More} href="/masterpiece" /> }}
    />,
    <DupGroupItemsGrid
      title={{ render: () => <DupTitle type={DupTitleTypes.Weekly} /> }}
      cards={[
        <DomCardGrid
          image="https://www.gstatic.com/webp/gallery3/1.png"
          label={{
            render: () => <DupLabelCard text="数学" />
          }}
          text="サンプルタイトルサンプルタイトルサンプルタイトル"
        />,
        <DomCardGrid
          image="https://www.gstatic.com/webp/gallery3/1.png"
          label={{
            render: () => <DupLabelCard text="農学・食品科学" />
          }}
          text="サンプルタイトルサンプルタイトルサンプルタイトル"
        />,
        <DomCardGrid
          image="https://www.gstatic.com/webp/gallery3/1.png"
          label={{
            render: () => <DupLabelCard text="数学" />
          }}
          text="サンプルタイトルサンプルタイトルサンプルタイトル"
        />,
      ]}
      link={{render: () => <DupLink type={DupLinkTypes.More} href="/rankings" /> }}
    />,
    <DomGroupItems
      title={{ render: () => <DupTitle type={DupTitleTypes.Monthly} /> }}
      cards={[
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
      ]}
      link={{ render: () => <DupLink type={DupLinkTypes.More} href="/rankings" /> }}
    />,
    <DupGroupItemsGrid
      title={{ render: () => <DupTitle type={DupTitleTypes.Latest} /> }}
      cards={[
        <DomCardGrid
          image="https://www.gstatic.com/webp/gallery3/1.png"
          label={{
            render: () => <DupLabelCard text="数学" />
          }}
          text="サンプルタイトルサンプルタイトルサンプルタイトル"
        />,
        <DomCardGrid
          image="https://www.gstatic.com/webp/gallery3/1.png"
          label={{
            render: () => <DupLabelCard text="新型コロナ" />
          }}
          text="サンプルタイトルサンプルタイトルサンプルタイトル"
        />,
        <DomCardGrid
          image="https://www.gstatic.com/webp/gallery3/1.png"
          label={{
            render: () => <DupLabelCard text="農学・食品科学" />
          }}
          text="サンプルタイトルサンプルタイトルサンプルタイトル"
        />,
      ]}
      link={{render: () => <DupLink type={DupLinkTypes.More} href="latest" /> }}
    />,
    <DomGroupCategory
      title={{ render: () => <DupTitle type={DupTitleTypes.Category} /> }}
      categories={[
        <DupLabelCategory
          text="数学"
        />,
        <DupLabelCategory
          text="物理学"
        />,
        <DupLabelCategory
          text="化学"
        />,
        <DupLabelCategory
          text="地球科学・天文学"
        />,
        <DupLabelCategory
          text="生物学・生命科学・基礎医学"
        />,
        <DupLabelCategory
          text="歯学"
        />,
        <DupLabelCategory
          text="農学・食品科学"
        />,
        <DupLabelCategory
          text="一般医学・社会医学・看護学"
        />,
        <DupLabelCategory
          text="臨床医学"
        />,
        <DupLabelCategory
          text="薬学"
        />,
        <DupLabelCategory
          text="一般工学・総合工学"
        />,
        <DupLabelCategory
          text="ナノ・材料科学"
        />,
        <DupLabelCategory
          text="建築学・土木工学"
        />,
        <DupLabelCategory
          text="機械工学"
        />,
      ]}
    />
  ]
  return (
    <DomPageTop
      header={{ render: () => <DomHeader /> }}
      groups={groups}
      footer={{ render: () => <DupFooter /> }}
    />
  )
}
