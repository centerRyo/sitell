import React from 'react'
import { DupLabelCard } from '../ui-a-label/DupLabelCard'
import { DupLabelCategory } from '../ui-a-label/DupLabelCategory'
import { DupLink, DupLinkTypes } from '../ui-a-link/DupLink'
import { DupTitle, DupTitleTypes } from '../ui-c-title/DupTitle'
import { DomCard } from '../ui-m-card/DomCard'
import { DomCardGrid } from '../ui-m-card/DomCardGrid'
import { DupFooter } from '../ui-o-footer/DupFooter'
import { DomGroupItems } from '../ui-o-group/DomGroupItems'
import { DupGroupItemsGrid } from '../ui-o-group/DupGroupItemsGrid'
import { DomHeader } from '../ui-o-header/DomHeader'
import { DomPageTop } from './DomPageTop'

export const DupPageTop: React.FC = () => {
  const categories = [
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
  ]
  return (
    <DomPageTop
      header={{ render: () => <DomHeader /> }}
      categories={categories}
      footer={{ render: () => <DupFooter /> }}
    />
  )
}
