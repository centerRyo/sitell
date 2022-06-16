import { colorType } from '@/theme/styleProps';
import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Logo } from '../../assets/Logo';
import { DomButton } from '../ui-a-button/DomButton';
import defaultClassNames from './dup-header-default.m.scss';

type Props = {
  classNames?: string;
};

export const DomHeader: React.FC<Props> = ({ classNames }) => {
  const styles = classNames || defaultClassNames;

  return (
    <header className={styles.header}>
      <div className={styles.root}>
        <Link to='/' className={styles.logo}>
          <Logo />
        </Link>
        {/* <<<<<<<<<<<< 初期リリースに不必要なのでコメントアウト >>>>>>>>>>>>>>> */}
        <div className={styles.nav}>
          <div className={styles.icon}>
            <BsSearch />
          </div>
          <ul className={styles.lead}>
            <li className={styles.button}>
              <DomButton color={colorType.main} onClick={() => {}}>
                新規登録
              </DomButton>
            </li>
            <li className={styles.button}>
              <DomButton color={colorType.sub} onClick={() => {}}>
                ログイン
              </DomButton>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
