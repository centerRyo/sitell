import React, { FC, ReactNode } from 'react';
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

      <div className={styles.footer}>
        <DupFooter />
      </div>
    </div>
  );
};
