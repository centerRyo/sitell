import React, { ReactNode } from 'react'
import defaultClassNames from './dup-tab-default.m.scss'

type Props = {
  buttons: Array<ReactNode>
  classNames?: string,
}

export const DomTab: React.FC<Props> = ({
  buttons,
  classNames,
}) => {
  const styles = classNames || defaultClassNames

  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        {buttons.map((button, index) => (
          <li key={index} className={styles.item}>
            {button}
          </li>
        ))}
      </ul>
    </div>
  )
}
