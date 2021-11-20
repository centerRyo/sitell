import React, { ReactNode } from 'react'
import { DomGroupItems } from './DomGroupItems'
import itemsGridClassNames from './dup-group-items-grid.m.scss'

type Props = {
  title: { render: () => ReactNode },
  cards: Array<ReactNode>,
  link: { render: () => ReactNode },
}

export const DupGroupItemsGrid: React.FC<Props> = ({
  title,
  cards,
  link,
}) => {
  return (
    <DomGroupItems
      title={title}
      cards={cards}
      link={link}
      classNames={itemsGridClassNames}
    />
  )
}
