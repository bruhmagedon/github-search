import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from './Header/Header';

import cls from './BaseLayout.module.scss';

export function BaseLayout() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <div className={cls.layoutContainer}>
        <Outlet />
      </div>
    </Suspense>
  );
}
