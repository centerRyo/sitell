import React, { ReactNode } from 'react'
import { useHistory } from 'react-router-dom'
import gridClassNames from './dup-card-grid.m.scss'

type Props = {
  // TODO: idを渡すのイケてない気がする。。。
  id: number,
  image: string,
  label: { render: () => ReactNode },
  text: string,
  classNames?: string,
}

export const DomCardGrid: React.FC<Props> = ({
  id,
  image,
  label,
  text,
  classNames
}) => {
  const styles = classNames || gridClassNames

  const history = useHistory()

  const handleClick = () => {
    history.push(`item/${id}`)
  }

  return (
    <a onClick={handleClick} className={styles.root}>
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
