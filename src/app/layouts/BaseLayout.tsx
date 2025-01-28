import { Loader, LoaderSize } from '@common/ui';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from './Header/Header';

import cls from './BaseLayout.module.scss';

export function BaseLayout() {
  return (
    <Suspense fallback={<div className={cls.loaderWrapper}><Loader size={LoaderSize.L} /></div>}>
      <Header />
      <main className={cls.layoutContainer}>
        <Outlet />
      </main>
    </Suspense>
  );
}
