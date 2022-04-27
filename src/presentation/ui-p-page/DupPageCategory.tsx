import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CategoryRonbunListResponse, getCategoryRonbunList } from '../../api/getCategoryRonbunList'
import { DupLabelCard } from '../ui-a-label/DupLabelCard'
import { DupTitle, DupTitleTypes } from '../ui-c-title/DupTitle'
import { DomCard } from '../ui-m-card/DomCard'
import { DomSkeletonCard } from '../ui-m-skeleton/DomSkeletonCard'
import { DupFooter } from '../ui-o-footer/DupFooter'
import { DomHeader } from '../ui-o-header/DomHeader'
import { DomPageItems } from './DomPageItems'

export const DupPageCategory: React.FC = () => {
  const [items, setItems] = useState<Array<CategoryRonbunListResponse>>([])
  const [loading, setLoading] = useState(false)

  const { id } = useParams<{id: string}>()

  useEffect(() => {
    setLoading(true)
    const f = async (): Promise<void> => {
      const items = await getCategoryRonbunList(Number(id))
      if (items.error === null && items.response !== null) {
        setItems(items.response)
        setLoading(false)
      }
    }
    f().catch(err => console.log(err))
  }, [])

  const title_item = items.find(item => item.category_id === Number(id))

  const contents = !loading
    ? items.map(item => {
        return (
          <DomCard
            key={item.id}
            id={item.id}
            image={item.thumbnail}
            label={{
              render: () => <DupLabelCard text={item.category_name} />
            }}
            text={item.title}
          />
        )
      })
    : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(n => {
      return <DomSkeletonCard />
    })

  return (
    <DomPageItems
      header={{ render: () => <DomHeader /> }}
      title={{ render: () => !loading && <DupTitle type={DupTitleTypes.Category} text={title_item?.category_name} />}}
      contents={contents}
      footer={{ render: () => <DupFooter /> }}
    />
  )
}
