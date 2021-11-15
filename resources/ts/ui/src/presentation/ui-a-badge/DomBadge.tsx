import React from 'react'
import defaultClassNames from './dup-badge-default.m.scss'

type Props = {
  number: number,
  classNames: string,
}

export const DomBadge: React.FC<Props> = ({
  number,
  classNames,
}) => {
  const styles = classNames || defaultClassNames

  return (
    <div className={styles.root}>
      <div className={styles.number}>{number}</div>
      <span className={styles.ribbon}></span>
    </div>
  )
}
