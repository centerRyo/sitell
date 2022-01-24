import React from 'react'
import { DupLabelCard } from '../ui-a-label/DupLabelCard'
import { DupFooter } from '../ui-o-footer/DupFooter'
import { DomHeader } from '../ui-o-header/DomHeader'
import { DomPageItem } from './DomPageItem'

export const DupPageItem: React.FC = () => {
  return (
    <DomPageItem
      header={{ render: () => <DomHeader /> }}
      label={{ render: () => <DupLabelCard text="数学" /> }}
      title="サンプルタイトルサンプルタイトルサンプルタイトル"
      image="https://www.gstatic.com/webp/gallery3/1.png"
      author="テスト著者テスト著者"
      year={2020}
      abstract="ここに要約が入りますここに要約が入りますここに要約が入ります"
      url="https://sato.com/dolor-ut-ut-libero-sed-numquam.html"
      footer={{ render: () => <DupFooter /> }}
    />
  )
}
