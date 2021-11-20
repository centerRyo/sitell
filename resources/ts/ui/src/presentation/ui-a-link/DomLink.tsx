import React from 'react'
import defaultClassNames from './dup-link-default.m.scss'

type Props = {
  text: string
  href: string | undefined
  classNames?: string
}

export const DomLink: React.FC<Props> = ({
  text,
  href,
  classNames
}) => {
  const styles = classNames || defaultClassNames

  return (
    <a href={href} className={styles.root}>
      {text}
    </a>
  )
}
