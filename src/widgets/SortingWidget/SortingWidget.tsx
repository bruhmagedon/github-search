import { Select, Skeleton } from '@common/ui';

import cls from './SortingWidget.module.scss';

interface SortingWidgetProps {
  count?: number | string;
  isLoading?: boolean;
  showLoader?: boolean;
  sortOptions: string[];
  title?: string;
  onSortChange: (selected: string) => void;
}

// Базовый виджет для панели сортировки репозиториев. Можно использоваться на разных страницах, кастомизируется через props
export const SortingWidget = ({
  title,
  count,
  isLoading,
  sortOptions,
  onSortChange,
  showLoader = true
}: SortingWidgetProps) => {
  return (
    <div className={cls.sortingContainer}>
      <div className={cls.sortingText}>
        {showLoader && isLoading ? (
          <Skeleton className={cls.sortingTextSkeleton} />
        ) : (
          <span>{title}: {count || 'Нет результатов'}</span>
        )}
      </div>
      <div className={cls.sortingSelect}>
        {showLoader && isLoading ? (
          <Skeleton className={cls.sortingSelectSkeleton} />
        ) : (
          <Select data={sortOptions} onChange={onSortChange} />
        )}
      </div>
    </div>
  );
};
