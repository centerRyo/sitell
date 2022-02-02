import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import defaultClassNames from './dup-error-default.m.scss'

type Props = {
  header: { render: () => ReactNode },
  errorCode: string,
  text: string,
  footer: { render: () => ReactNode },
  classNames?: string,
}

export const DomError: React.FC<Props> = ({
  header,
  errorCode,
  text,
  footer,
  classNames,
}) => {
  const styles = classNames || defaultClassNames

  return (
    <>
      <div className={styles.header}>
        { header.render() }
      </div>
      <div className={styles.main}>
        <h1 className={styles.title}>
          { errorCode }
        </h1>
        <p className={styles.text}>{ text }</p>
        <Link to="/" className={styles.button}>
          HOME
        </Link>
      </div>
      <div className={styles.footer}>
        { footer.render() }
      </div>
    </>
  )
}
