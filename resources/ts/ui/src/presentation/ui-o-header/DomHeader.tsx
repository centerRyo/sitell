import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { Logo } from '../../assets/Logo'
import { DupButton, DupButtonTypes } from '../ui-a-button/DupButton'
import './dup-header-default.m.scss'

export const DomHeader: React.FC = () => {
  return (
    <header className="header">
      <div className="root">
        <a className="logo">
          <Logo />
        </a>
        <div className="nav">
          <div className="icon">
            <BsSearch />
          </div>
          <ul className="lead">
            <li className="button">
              <DupButton type={DupButtonTypes.Register} />
            </li>
            <li className="button">
              <DupButton type={DupButtonTypes.Login} />
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
