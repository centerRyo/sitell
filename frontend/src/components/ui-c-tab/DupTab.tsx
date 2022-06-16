import React from 'react';
import { DomButton } from '../ui-a-button/DomButton';
import { DomTab } from './DomTab';
import { colorType } from '@/theme/styleProps';

export const DupTab: React.FC = () => {
  const buttons = [
    <DomButton color={colorType.main} onClick={() => {}}>
      月間
    </DomButton>,
    <DomButton color={colorType.sub} onClick={() => {}}>
      週間
    </DomButton>,
  ];
  return <DomTab buttons={buttons} />;
};
