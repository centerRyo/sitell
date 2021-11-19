import React, { ReactNode } from 'react'
import topClassNames from './dup-page-top.m.scss'

type Props = {
  header: { render: () => ReactNode },
  topic?: { render: () => ReactNode },
  categories: Array<ReactNode>,
  footer: { render: () => ReactNode },
  classNames?: string,
}

export const DomPageTop: React.FC<Props> = ({
  header,
  topic,
  categories,
  footer,
  classNames,
}) => {
  const styles = classNames || topClassNames

  return (
    <>
      <div className={styles.header}>
        {header.render()}
      </div>
      <main className={styles.main}>
        <div className={styles.topic}>
          {topic}
        </div>
        <div className={styles.container}>
          {categories.map((category, index) => (
            <section key={index} className={styles.categories}>
              {category}
            </section>
          ))}
        </div>
      </main>
      <div className={styles.footer}>
        {footer.render()}
      </div>
    </>
  )
}
