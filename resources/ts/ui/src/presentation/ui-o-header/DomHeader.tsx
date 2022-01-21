import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Logo } from '../../assets/Logo'
import { DupButton, DupButtonTypes } from '../ui-a-button/DupButton'
import defaultClassNames from './dup-header-default.m.scss'

type Props = {
  classNames?: string
}

export const DomHeader: React.FC<Props> = ({ classNames }) => {
  const styles = classNames || defaultClassNames

  return (
    <header className={styles.header}>
      <div className={styles.root}>
        <Link to='/' className={styles.logo}>
          <Logo />
        </Link>
        <div className={styles.nav}>
          <div className={styles.icon}>
            <BsSearch />
          </div>
          <ul className={styles.lead}>
            <li className={styles.button}>
              <DupButton type={DupButtonTypes.Register} />
            </li>
            <li className={styles.button}>
              <DupButton type={DupButtonTypes.Login} />
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
