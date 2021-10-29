import React from 'react'
import defaultClassNames from './dup-button-default.m.scss'

type Props = {
  text: string
  classNames?: string
  onClick: () => void
}

export const DomButton: React.FC<Props> = ({
  text,
  classNames,
  onClick
}) => {
  const styles = classNames || defaultClassNames

  return (
    <button className={styles.root} onClick={onClick}>
      <p className={styles.text}>{text}</p>
    </button>
  )
}
