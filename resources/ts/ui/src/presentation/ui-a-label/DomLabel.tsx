import React from 'react'
import defaultClassNames from './dup-label-default.m.scss'

type Props = {
  text: string,
  classNames?: string,
}

export const DomLabel: React.FC<Props> = ({
  text,
  classNames,
}) => {
  const styles = classNames || defaultClassNames

  return (
    <div className={styles.root}>
      <p className={styles.text}>{text}</p>
    </div>
  )
}
