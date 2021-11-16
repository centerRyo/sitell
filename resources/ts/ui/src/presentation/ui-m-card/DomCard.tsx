import React, { ReactNode } from 'react'
import defaultClassNames from './dup-card-default.m.scss'

type Props = {
  badge?: { render: () => ReactNode }
  image: string,
  label: { render: () => ReactNode },
  text: string,
  classNames?: string,
}

export const DomCard: React.FC<Props> = ({
  badge,
  image,
  label,
  text,
  classNames
}) => {
  const styles = classNames || defaultClassNames

  return (
    <a className={styles.root}>
      {badge && (
        <div className={styles.badge}>
          {badge.render()}
        </div>
      )}
      <div className={styles.image}>
        <img src={image} alt="" />
      </div>
      <div className={styles.label}>
        {label.render()}
      </div>
      <div className={styles.text}>
        {text}
      </div>
    </a>
  )
}
