import React, { useEffect, useState } from 'react'
import { getRonbun, ronbunResponse } from '../../api/getRonbun'
import { DupLabelCard } from '../ui-a-label/DupLabelCard'
import { DupFooter } from '../ui-o-footer/DupFooter'
import { DomHeader } from '../ui-o-header/DomHeader'
import { DomPageItem } from './DomPageItem'

export const DupPageItem: React.FC = () => {
  const [ronbun, setRonbun] = useState<ronbunResponse>({
    id: 0,
    abstract: '',
    author: '',
    category_id: 0,
    thumbnail: '',
    title: '',
    url: '',
    user_id: 0,
    year: 0,
    created_at: '',
    updated_at: '',
    category_name: ''
  })

  useEffect(() => {
    const f = async (): Promise<void> => {
      const ronbun = await getRonbun(23)
      if (ronbun.error === null && ronbun.response !== null) {
        setRonbun(ronbun.response)
      }
    }
    f().catch(err => console.log(err))
  }, [])

  return (
    <DomPageItem
      header={{ render: () => <DomHeader /> }}
      label={{ render: () => <DupLabelCard text={ronbun.category_name} /> }}
      title={ronbun.title}
      image={ronbun.thumbnail}
      author={ronbun.author}
      year={ronbun.year}
      abstract={ronbun.abstract}
      url={ronbun.url}
      footer={{ render: () => <DupFooter /> }}
    />
  )
}
