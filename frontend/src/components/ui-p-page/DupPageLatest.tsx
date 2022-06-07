import { useRonbuns } from '../../hooks/useRonbuns';
import React from 'react';
import { DupLabelCard } from '../ui-a-label/DupLabelCard';
import { DupTitle, DupTitleTypes } from '../ui-c-title/DupTitle';
import { DomCard } from '../ui-m-card/DomCard';
import { DomSkeletonCard } from '../ui-m-skeleton/DomSkeletonCard';
import { DupFooter } from '../ui-o-footer/DupFooter';
import { DomHeader } from '../ui-o-header/DomHeader';
import { DomPageItems } from './DomPageItems';

export const DupPageLatest: React.FC = () => {
  const { data, isLoading, error } = useRonbuns();

  const contents = !isLoading
    ? data?.map((item) => {
        return (
          <DomCard
            key={item.id}
            id={item.id}
            image={item.thumbnail}
            label={{
              render: () => <DupLabelCard text={item.category_name} />,
            }}
            text={item.title}
          />
        );
      })
    : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((n) => {
        return <DomSkeletonCard />;
      });

  return (
    <DomPageItems
      title={{
        render: () => !isLoading && <DupTitle type={DupTitleTypes.All} />,
      }}
      contents={contents}
    />
  );
};
