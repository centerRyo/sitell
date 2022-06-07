import React, { ReactNode } from 'react';
import { DomLayout } from '../ui-u-layout/DomLayout';
import topClassNames from './dup-page-top.m.scss';

type Props = {
  topics: { render: () => ReactNode };
  groups: Array<ReactNode>;
  classNames?: string;
};

export const DomPageTop: React.FC<Props> = ({ topics, groups, classNames }) => {
  const styles = classNames || topClassNames;

  return (
    <DomLayout>
      <div className={styles.topics}>{topics.render()}</div>
      <div className={styles.container}>
        {groups.map((group, index) => (
          <section key={index} className={styles.group}>
            {group}
          </section>
        ))}
      </div>
    </DomLayout>
  );
};
