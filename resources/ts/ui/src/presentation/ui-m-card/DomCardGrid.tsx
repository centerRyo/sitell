import React, { ReactNode } from 'react'
import gridClassNames from './dup-card-grid.m.scss'

type Props = {
  image: string,
  label: { render: () => ReactNode },
  text: string,
  classNames?: string,
}

export const DomCardGrid: React.FC<Props> = ({
  image,
  label,
  text,
  classNames
}) => {
  const styles = classNames || gridClassNames

  return (
    <a className={styles.root}>
      <div className={styles.image}>
        <img src={image} alt="" />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.label}>
          {label.render()}
        </div>
        <div className={styles.text}>
          {text}
        </div>
      </div>
    </a>
  )
}
