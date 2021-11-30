import React from 'react'
import defaultClassNames from './dup-title-default.m.scss'

type Props = {
  text?: string
  classNames?: string
}

export const DomTitle: React.FC<Props> = ({
  text,
  classNames
}) => {
  const styles = classNames || defaultClassNames

  return (
    <h1 className={styles.root}>
      <span className={styles.text}>{text}</span>
    </h1>
  )
}
