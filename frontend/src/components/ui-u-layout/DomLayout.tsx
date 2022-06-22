import React, { FC, ReactNode } from 'react';
import { DomSpinner } from '../ui-m-spinner/DomSpinner';
import { DupFooter } from '../ui-o-footer/DupFooter';
import { DomHeader } from '../ui-o-header/DomHeader';
import styles from './dup-layout-default.module.scss';

type Props = {
  children: ReactNode;
};

export const DomLayout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <DomHeader />
      </div>

      <main className={styles.content}>{children}</main>

      <DomSpinner thickness='0.8rem' />

      <div className={styles.footer}>
        <DupFooter />
      </div>
    </div>
  );
};
