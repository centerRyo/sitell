import React, { ReactNode } from 'react'
import itemsClassNames from './dup-page-items.m.scss'

type Props = {
  header: { render: () => ReactNode },
  title: { render: () => ReactNode },
  topic?: string,
  tab?: { render: () => ReactNode },
  contents: Array<ReactNode>,
  pagination?: { render: () => ReactNode },
  footer: { render: () => ReactNode },
  classNames?: string,
}

export const DomPageItems: React.FC<Props> = ({
  header,
  title,
  topic,
  tab,
  contents,
  pagination,
  footer,
  classNames,
}) => {
  const styles = classNames || itemsClassNames

  return (
    <>
      <div className={styles.header}>
        {header.render()}
      </div>
      <div className={styles.main}>
        <div className={styles.title}>{title.render()}</div>
        {topic && (
          <div className={styles.topic}>{topic}</div>
        )}
        {tab && (
          <div className={styles.tab}>{tab.render()}</div>
        )}
        <div className={styles.contents}>
          {contents.map((content, index) => (
            <div key={index} className={styles.content}>{content}</div>
          ))}
        </div>
        {pagination && (
          <div className={styles.pagination}>{pagination.render()}</div>
        )}
      </div>
      <div className={styles.footer}>
        {footer.render()}
      </div>
    </>
  )
}
