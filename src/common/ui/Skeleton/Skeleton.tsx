import { classNames } from '@common/utilities';

import cls from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
}

export const Skeleton = ({ className }: SkeletonProps) => {
  return <div className={classNames(cls.Skeleton, {}, [className])} />;
};
