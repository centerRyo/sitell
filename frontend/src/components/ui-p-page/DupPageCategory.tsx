import { useCategoryRonbuns } from '../../hooks/useCategoryRonbuns';
import React from 'react';
import { useParams } from 'react-router-dom';
import { DupLabelCard } from '../ui-a-label/DupLabelCard';
import { DupTitle, DupTitleTypes } from '../ui-c-title/DupTitle';
import { DomCard } from '../ui-m-card/DomCard';
import { DomSkeletonCard } from '../ui-m-skeleton/DomSkeletonCard';
import { DupFooter } from '../ui-o-footer/DupFooter';
import { DomHeader } from '../ui-o-header/DomHeader';
import { DomPageItems } from './DomPageItems';

export const DupPageCategory: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error } = useCategoryRonbuns(Number(id));

  const title_item = data?.find((item) => item.category_id === Number(id));

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
        render: () =>
          !isLoading && (
            <DupTitle
              type={DupTitleTypes.Category}
              text={title_item?.category_name}
            />
          ),
      }}
      contents={contents}
    />
  );
};
