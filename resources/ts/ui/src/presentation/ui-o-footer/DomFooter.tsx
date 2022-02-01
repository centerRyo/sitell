import React, { ReactNode } from 'react'
import { BsTwitter, BsFacebook, BsYoutube } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { LogoInverted } from '../../assets/LogoInverted'
import defaultClassNames from './dup-footer-default.m.scss'

type Props = {
  linksLeft: Array<ReactNode>
  linksRight: Array<ReactNode>
  classNames?: string
}

export const DomFooter: React.FC<Props> = ({
  linksLeft,
  linksRight,
  classNames
}) => {
  const styles = classNames || defaultClassNames

  return (
    <footer className={styles.footer}>
      <div className={styles.root}>
        <div className={styles.container}>
          <Link to="/" className={styles.icon}>
            <LogoInverted />
          </Link>
          {/* <<<<<<<<<<<< 初期リリースに不必要なのでコメントアウト >>>>>>>>>>>>>>> */}
          {/* <div className={styles.links}>
            <ul className={styles.items}>
              {linksLeft.map((link, index) => (
                <li className={styles.item} key={index}>
                  {link}
                </li>
              ))}
            </ul>
            <ul className={styles.items}>
              {linksRight.map((link, index) => (
                <li className={styles.item} key={index}>
                  {link}
                </li>
              ))}
            </ul>
          </div> */}
        </div>
        <div className={styles.bottom}>
          <div className={styles.social}>
            <a href="https://twitter.com/xt_rynkd08" className={styles.social__item}><BsTwitter /></a>
            <a href="https://www.facebook.com/profile.php?id=100012703666212" className={styles.social__item}><BsFacebook /></a>
            <a href="https://www.youtube.com/channel/UC4pjinkdnREgrqSSiNf_mcw" className={styles.social__item}><BsYoutube /></a>
          </div>
          <p className={styles.copyright}>Copyrights©︎xtimmune. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
