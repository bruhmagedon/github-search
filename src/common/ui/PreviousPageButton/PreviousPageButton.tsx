import IconArrowLeft from '@assets/icon/ArrowLeft.svg?react';
import { classNames } from '@common/utilities';
import { useNavigate } from 'react-router-dom';

import { Button } from '../Button/Button';

import cls from './PreviousPageButton.module.scss';

interface PreviousPageButtonProps {
  className?: string;
}

export const PreviousPageButton = ({ className }: PreviousPageButtonProps) => {
  const navigate = useNavigate();

  return (
    <div className={classNames(cls.PreviousPageButton, {}, [className])}>
      <Button onClick={() => navigate(-1)}>
        <div className={cls.content}>
          <IconArrowLeft />
          <span>Назад</span>
        </div>
      </Button>
    </div>
  );
};
