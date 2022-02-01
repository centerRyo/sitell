import React, { useEffect, useState } from 'react'
import { getLatestRonbunList } from '../../api/getLatestRonbunList'
import { ronbunResponse } from '../../api/getRonbun'
import { DupLabelCard } from '../ui-a-label/DupLabelCard'
import { DupTitle, DupTitleTypes } from '../ui-c-title/DupTitle'
import { DomCard } from '../ui-m-card/DomCard'
import { DomSkeletonCard } from '../ui-m-skeleton/DomSkeletonCard'
import { DupFooter } from '../ui-o-footer/DupFooter'
import { DomHeader } from '../ui-o-header/DomHeader'
import { DomPageItems } from './DomPageItems'

export const DupPageLatest: React.FC = () => {
  const [items, setItems] = useState<Array<ronbunResponse>>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const f = async (): Promise<void> => {
      const ronbuns = await getLatestRonbunList()
      if (ronbuns.error === null && ronbuns.response !== null) {
        setItems(ronbuns.response)
        setLoading(false)
      }
    }
    f().catch(err => console.log(err))
  }, [])

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
      title={{ render: () => !loading && <DupTitle type={DupTitleTypes.Latest} />}}
      contents={contents}
      footer={{ render: () => <DupFooter /> }}
    />
  )
}
