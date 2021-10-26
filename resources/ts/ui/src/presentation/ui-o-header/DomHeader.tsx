import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { Logo } from '../../assets/Logo'
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
              <button>新規登録</button>
            </li>
            <li className="button">
              <button>ログイン</button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
