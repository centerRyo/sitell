import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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
  const [loading, setLoading] = useState(false)

  const { id } = useParams<{id: string}>()

  useEffect(() => {
    setLoading(true)
    const f = async (): Promise<void> => {
      const ronbun = await getRonbun(Number(id))
      if (ronbun.error === null && ronbun.response !== null) {
        setRonbun(ronbun.response)
        setLoading(false)
      }
    }
    f().catch(err => console.log(err))
  }, [])

  return (
    <DomPageItem
      header={{ render: () => <DomHeader /> }}
      label={{ render: () => <DupLabelCard text={ronbun.category_name} /> }}
      ronbun={ronbun}
      footer={{ render: () => <DupFooter /> }}
      loading={loading}
    />
  )
}
