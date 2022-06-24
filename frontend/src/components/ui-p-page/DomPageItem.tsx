import React, { ReactNode } from 'react';
import { RonbunResponse } from '../../hooks/useRonbun';
import { DupParser } from '../ui-a-parser/DupParser';
import { DomSpinner } from '../ui-m-spinner/DomSpinner';
import { DomLayout } from '../ui-u-layout/DomLayout';
import defaultClassNames from './dup-page-item.m.scss';

type Props = {
  label: { render: () => ReactNode };
  ronbun: RonbunResponse | undefined;
  loading: boolean;
  classNames?: string;
};

export const DomPageItem: React.FC<Props> = ({
  label,
  ronbun,
  loading,
  classNames,
}) => {
  const styles = classNames || defaultClassNames;

  return (
    <DomLayout>
      {!loading ? (
        <>
          <section className={styles.head}>
            <div className={styles.label}>{label.render()}</div>
            <div className={styles.title}>{ronbun?.title}</div>
            <div className={styles.image}>
              <img src={ronbun?.thumbnail} alt='' />
            </div>
            <table className={styles.table}>
              <tbody>
                <tr>
                  <th>著者</th>
                  <td>{ronbun?.author}</td>
                </tr>
                <tr>
                  <th>出版年</th>
                  <td>{ronbun?.year}年</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className={styles.content}>
            <DupParser dirtyHtml={ronbun?.abstract || ''} />
            <div className={styles.url}>
              オリジナル論文は
              <a href={ronbun?.url} className={styles.urlLink}>
                こちら
              </a>
              から
            </div>
          </section>
        </>
      ) : (
        <div className={styles.loading}>
          <DomSpinner size='lg' thickness='0.9rem' />
        </div>
      )}
    </DomLayout>
  );
};
