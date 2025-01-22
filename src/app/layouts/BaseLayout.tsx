import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import cls from './BaseLayout.module.scss';

export function BaseLayout() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={cls.header}></div>
      <Outlet />
    </Suspense>
  );
}
