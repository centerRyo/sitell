import React, { ReactNode } from 'react'
import categoryClassNames from './dup-group-category.m.scss'

type Props = {
  title: { render: () => ReactNode },
  categories: Array<ReactNode>,
  classNames?: string,
}

export const DomGroupCategory: React.FC<Props> = ({
  title,
  categories,
  classNames,
}) => {
  const styles = classNames || categoryClassNames

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        {title.render()}
      </div>
      <div className={styles.categories}>
        {categories.map((category, index) => (
          <span key={index} className={styles.category}>{category}</span>
        ))}
      </div>
    </div>
  )
}
