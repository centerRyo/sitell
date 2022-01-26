import React, { ReactNode } from 'react'
import { useHistory } from 'react-router-dom'
import defaultClassNames from './dup-card-default.m.scss'

type Props = {
  badge?: { render: () => ReactNode },
  // TODO: idを渡すのイケてない気がする。。。
  id: number,
  image: string,
  label: { render: () => ReactNode },
  text: string,
  classNames?: string,
}

export const DomCard: React.FC<Props> = ({
  badge,
  id,
  image,
  label,
  text,
  classNames
}) => {
  const styles = classNames || defaultClassNames

  const history = useHistory()

  const handleClick = () => {
    history.push(`item/${id}`)
  }

  return (
    <a onClick={handleClick} className={styles.root}>
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
