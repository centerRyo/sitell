import { CateogoriesResponse } from '../..//hooks/top/useCategories';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { DomLabel } from './DomLabel';
import categoryClassNames from './dup-label-category.m.scss';

type Props = {
  category: CateogoriesResponse;
};

export const DupLabelCategory: React.FC<Props> = ({ category }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/category/${category.id}`);
  };
  return (
    <DomLabel
      text={category.name}
      onClick={handleClick}
      classNames={categoryClassNames}
    />
  );
};
