import React, { ReactNode } from 'react'
import defaultClassNames from './dup-button-default.m.scss'

type Props = {
  text: string
  icon?: ReactNode,
  classNames?: string
  onClick: () => void
}

export const DomButton: React.FC<Props> = ({
  text,
  icon,
  classNames,
  onClick,
}) => {
  const styles = classNames || defaultClassNames

  return (
    <button className={styles.root} onClick={onClick}>
      {icon && (
        <span className={styles.icon}>{icon}</span>
      )}
      <p className={styles.text}>{text}</p>
    </button>
  )
}
