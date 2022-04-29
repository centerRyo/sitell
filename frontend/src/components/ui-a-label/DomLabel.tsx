import React from 'react'
import defaultClassNames from './dup-label-default.m.scss'

type Props = {
  text: string,
  onClick?: () => void,
  classNames?: string,
}

export const DomLabel: React.FC<Props> = ({
  text,
  onClick,
  classNames,
}) => {
  const styles = classNames || defaultClassNames

  return (
    <div className={styles.root} onClick={onClick}>
      <p className={styles.text}>{text}</p>
    </div>
  )
}
