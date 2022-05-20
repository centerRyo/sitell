import { useRonbun } from '../../hooks/useRonbun';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { DupLabelCard } from '../ui-a-label/DupLabelCard';
import { DupFooter } from '../ui-o-footer/DupFooter';
import { DomHeader } from '../ui-o-header/DomHeader';
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
      header={{ render: () => <DomHeader /> }}
      label={{ render: () => <DupLabelCard text={data?.category_name} /> }}
      ronbun={data}
      footer={{ render: () => <DupFooter /> }}
      loading={isLoading}
    />
  ) : null;
};
