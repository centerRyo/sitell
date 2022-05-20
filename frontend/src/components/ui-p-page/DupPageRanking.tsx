import React from 'react';
import { DomBadge } from '../ui-a-badge/DomBadge';
import { DupBadge, DupBadgeTypes } from '../ui-a-badge/DupBadge';
import { DupLabelCard } from '../ui-a-label/DupLabelCard';
import { DupTab } from '../ui-c-tab/DupTab';
import { DupTitle, DupTitleTypes } from '../ui-c-title/DupTitle';
import { DomCard } from '../ui-m-card/DomCard';
import { DupFooter } from '../ui-o-footer/DupFooter';
import { DomHeader } from '../ui-o-header/DomHeader';
import { DomPageItems } from './DomPageItems';

export const DupPageRanking: React.FC = () => {
  const contents = [
    <DomCard
      badge={{
        render: () => <DupBadge type={DupBadgeTypes.Gold} number={1} />,
      }}
      id={1}
      image='https://www.gstatic.com/webp/gallery3/1.png'
      label={{
        render: () => <DupLabelCard text='数学' />,
      }}
      text='サンプルタイトルサンプルタイトルサンプルタイトル'
    />,
    <DomCard
      badge={{
        render: () => <DupBadge type={DupBadgeTypes.Silver} number={2} />,
      }}
      id={1}
      image='https://www.gstatic.com/webp/gallery3/1.png'
      label={{
        render: () => <DupLabelCard text='農学・食品科学' />,
      }}
      text='サンプルタイトルサンプルタイトルサンプルタイトル'
    />,
  ];

  return (
    <DomPageItems
      header={{ render: () => <DomHeader /> }}
      title={{ render: () => <DupTitle type={DupTitleTypes.Ranking} /> }}
      tab={{ render: () => <DupTab /> }}
      contents={contents}
      footer={{ render: () => <DupFooter /> }}
    />
  );
};
