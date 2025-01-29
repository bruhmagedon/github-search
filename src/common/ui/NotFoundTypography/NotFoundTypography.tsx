import { classNames } from '@common/utilities';

import cls from './NotFoundTypography.module.scss';

interface NotFoundTypographyProps {
  className?: string;
  text: string;
}

export const NotFoundTypography = ({ className, text }: NotFoundTypographyProps) => {
  return (
    <span className={classNames(cls.NotFoundTypography, {}, [className])}>
      {text}
    </span>
  );
};
