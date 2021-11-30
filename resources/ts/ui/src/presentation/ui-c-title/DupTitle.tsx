import React from 'react'
import { DomTitle } from './DomTitle'
import MainClassNames from './dup-title-main.m.scss'
import SubClassNames from './dup-title-sub.m.scss'

type Props = {
  type: string,
  text?: string,
}

export const DupTitleTypes = {
  MasterPiece: 'master-piece',
  Weekly: 'weekly',
  Monthly: 'monthly',
  Latest: 'latest',
  Categories: 'categories',
  Ranking: 'ranking',
  Category: 'category',
}

export const DupTitle: React.FC<Props> = ({
  type,
  text,
}) => {
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
      type: DupTitleTypes.Categories,
      text: 'カテゴリー一覧',
      classNames: MainClassNames,
    },
    {
      type: DupTitleTypes.Ranking,
      text: '要約ランキング',
      classNames: MainClassNames,
    },
    {
      type: DupTitleTypes.Category,
      text: text,
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
