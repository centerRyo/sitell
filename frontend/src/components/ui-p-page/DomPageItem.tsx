import { RonbunResponse } from '../../hooks/useRonbun';
import React, { ReactNode } from 'react';
import { DupParser } from '../ui-a-parser/DupParser';
import { DomSkeletonItem } from '../ui-m-skeleton/DomSkeletonItem';
import defaultClassNames from './dup-page-item.m.scss';

type Props = {
  header: { render: () => ReactNode };
  label: { render: () => ReactNode };
  ronbun: RonbunResponse;
  footer: { render: () => ReactNode };
  loading: boolean;
  classNames?: string;
};

export const DomPageItem: React.FC<Props> = ({
  header,
  label,
  ronbun,
  footer,
  loading,
  classNames,
}) => {
  const styles = classNames || defaultClassNames;

  return (
    <>
      <div className={styles.header}>{header.render()}</div>
      <div className={styles.main}>
        {!loading ? (
          <>
            <section className={styles.head}>
              <div className={styles.label}>{label.render()}</div>
              <div className={styles.title}>{ronbun.title}</div>
              <div className={styles.image}>
                <img src={ronbun.thumbnail} alt='' />
              </div>
              <table className={styles.table}>
                <tbody>
                  <tr>
                    <th>著者</th>
                    <td>{ronbun.author}</td>
                  </tr>
                  <tr>
                    <th>出版年</th>
                    <td>{ronbun.year}年</td>
                  </tr>
                </tbody>
              </table>
            </section>
            <section className={styles.content}>
              <DupParser dirtyHtml={ronbun.abstract} />
              <div className={styles.url}>
                オリジナル論文は
                <a href={ronbun.url} className={styles.url_link}>
                  こちら
                </a>
                から
              </div>
            </section>
          </>
        ) : (
          <DomSkeletonItem />
        )}
      </div>
      <div className={styles.footer}>{footer.render()}</div>
    </>
  );
};
