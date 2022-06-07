import { useRonbun } from '../../hooks/useRonbun';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { DupLabelCard } from '../ui-a-label/DupLabelCard';
import { DomPageItem } from './DomPageItem';

export const DupPageItem: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useRonbun(Number(id));

  if (error) {
    history.push('/404');
  }

  return data ? (
    <DomPageItem
      label={{ render: () => <DupLabelCard text={data?.category_name} /> }}
      ronbun={data}
      loading={isLoading}
    />
  ) : null;
};
