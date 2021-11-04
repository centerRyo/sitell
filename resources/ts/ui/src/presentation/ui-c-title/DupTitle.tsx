import React from 'react'
import { DomTitle } from './DomTitle'
import MainClassNames from './dup-title-main.m.scss'
import SubClassNames from './dup-title-sub.m.scss'

type Props = {
  type: string,
}

export const DupTitleTypes = {
  MasterPiece: 'master-piece',
  Weekly: 'weekly',
  Monthly: 'monthly',
  Latest: 'latest',
  Category: 'category',
}

export const DupTitle: React.FC<Props> = ({ type }) => {
  // TODO: 実装がダサい。要リファクタリング
  const targets = [
    {
      type: DupTitleTypes.MasterPiece,
      text: '今読みたい論文',
      classNames: MainClassNames,
    },
    {
      type: DupTitleTypes.Weekly,
      text: '週間ランキング',
      classNames: SubClassNames,
    },
    {
      type: DupTitleTypes.Monthly,
      text: '月間ランキング',
      classNames: MainClassNames,
    },
    {
      type: DupTitleTypes.Latest,
      text: '新着論文',
      classNames: SubClassNames,
    },
    {
      type: DupTitleTypes.Category,
      text: 'カテゴリー一覧',
      classNames: MainClassNames,
    },
  ]
  const target = targets.filter(t => t.type === type)

  return (
    <DomTitle
      text={target[0].text}
      classNames={target[0].classNames}
    />
  )
}
