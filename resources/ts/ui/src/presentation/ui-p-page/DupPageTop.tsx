import React, { ReactElement, useEffect, useState } from 'react'
import { categoryListResponse, getCategoryList } from '../../api/getCategoryList'
import { getTopLatestRonbunList, topLatestRonbunListResponse } from '../../api/getTopLatestRonbunList'
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
  const [categories, setCategories] = useState<Array<categoryListResponse>>([])
  const [latests, setLatests] = useState<Array<topLatestRonbunListResponse>>([])

  useEffect(() => {
    const f = async (): Promise<void> => {
      const latests = await getTopLatestRonbunList()
      const categories = await getCategoryList()
      if (latests.error === null && latests.response !== null) {
        setLatests(latests.response)
      }
      if (categories.error === null && categories.response !== null) {
        setCategories(categories.response)
      }
    }
    f().catch(err => console.log(err))
  }, [])

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
          image="https://tk.ismcdn.jp/mwimgs/b/f/1140/img_bf687219033dbe7e1576a59e1f14495a225863.jpg"
          label={{
            render: () => <DupLabelCard text="農学・食品科学" />
          }}
          text="サンプルタイトルサンプル"
        />,
      ]}
      link={{ render: () => <DupLink type={DupLinkTypes.More} href="/rankings" /> }}
    />,
    <DupGroupItemsGrid
      title={{ render: () => <DupTitle type={DupTitleTypes.Latest} /> }}
      cards={latests.map(latest => {
        return <DomCardGrid image={latest.thumbnail} label={{ render: () => <DupLabelCard text={latest.category_name} /> }} text={latest.title} />
      })}
      link={{render: () => <DupLink type={DupLinkTypes.More} href="latest" /> }}
    />,
    <DomGroupCategory
      title={{ render: () => <DupTitle type={DupTitleTypes.Categories} /> }}
      categories={categories.map(category => {
        return <DupLabelCategory text={category.name} />
      })}
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
