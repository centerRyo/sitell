import React, { ReactNode } from 'react';
import { DomLayout } from '../ui-u-layout/DomLayout';
import itemsClassNames from './dup-page-items.m.scss';

type Props = {
  title: { render: () => ReactNode };
  topic?: string;
  tab?: { render: () => ReactNode };
  contents: Array<ReactNode> | undefined;
  pagination?: { render: () => ReactNode };
  classNames?: string;
};

export const DomPageItems: React.FC<Props> = ({
  title,
  topic,
  tab,
  contents,
  pagination,
  classNames,
}) => {
  const styles = classNames || itemsClassNames;

  return (
    <DomLayout>
      <div className={styles.main}>
        <div className={styles.title}>{title.render()}</div>
        {topic && <div className={styles.topic}>{topic}</div>}
        {tab && <div className={styles.tab}>{tab.render()}</div>}
        <div className={styles.contents}>
          {contents?.map((content, index) => (
            <div key={index} className={styles.content}>
              {content}
            </div>
          ))}
        </div>
        {pagination && (
          <div className={styles.pagination}>{pagination.render()}</div>
        )}
      </div>
    </DomLayout>
  );
};
