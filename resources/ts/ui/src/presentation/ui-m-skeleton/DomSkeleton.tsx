import React from 'react'
import classNames from 'classnames'
import defaultClassNames from './dup-skeleton-default.m.scss'

type Props = {
  type: string,
  className?: string,
}

export const DomSkeleton: React.FC<Props> = ({
  type,
  className,
}) => {
  const styles = className || defaultClassNames
  // TODO: もっと上手いやり方でやりたい。。。
  const classes = type === 'text'
                    ? styles.text
                    : type === 'title'
                      ? styles.title
                      : type === 'thumbnail'
                        ? styles.thumbnail
                        : ''

  return (
    <div className={classNames(styles.root, classes)}></div>
  )
}
