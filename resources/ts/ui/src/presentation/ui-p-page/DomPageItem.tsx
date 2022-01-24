import React, { ReactNode } from 'react'
import defaultClassNames from './dup-page-item.m.scss'

type Props = {
  header: { render: () => ReactNode },
  label: { render: () => ReactNode },
  title: string,
  image: string,
  author: string,
  year: number,
  abstract: string,
  url: string,
  footer: { render: () => ReactNode },
  classNames?: string,
}

export const DomPageItem: React.FC<Props> = ({
  header,
  label,
  title,
  image,
  author,
  year,
  abstract,
  url,
  footer,
  classNames,
}) => {
  const styles = classNames || defaultClassNames

  return (
    <>
      <div className={styles.header}>
        {header.render()}
      </div>
      <div className={styles.main}>
        <section className={styles.head}>
          <div className={styles.label}>
            {label.render()}
          </div>
          <div className={styles.title}>
            {title}
          </div>
          <div className={styles.image}>
            <img src={image} alt="" />
          </div>
          <table className={styles.table}>
            <tr>
              <th>著者</th>
              <td>{author}</td>
            </tr>
            <tr>
              <th>出版年</th>
              <td>{year}年</td>
            </tr>
          </table>
        </section>
        <section className={styles.content}>
          {abstract}
          <div className={styles.url}>
            オリジナル論文は
            <a href={url} className={styles.url_link}>こちら</a>
            から
          </div>
        </section>
      </div>
      <div className={styles.footer}>
        {footer.render()}
      </div>
    </>
  )
}
