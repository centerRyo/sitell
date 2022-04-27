import React, { ReactNode } from 'react'
import itemsClassNames from './dup-group-items.m.scss'

type Props = {
  title: { render: () => ReactNode },
  cards: Array<ReactNode>,
  link: { render: () => ReactNode },
  classNames?: string,
}

export const DomGroupItems: React.FC<Props> = ({
  title,
  cards,
  link,
  classNames,
}) => {
  const styles = classNames || itemsClassNames

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        {title.render()}
      </div>
      <div className={styles.cards}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            {card}
          </div>
        ))}
      </div>
      <div className={styles.link}>
        {link.render()}
      </div>
    </div>
  )
}
