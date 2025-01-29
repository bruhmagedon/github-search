import { RouterProvider } from '@app/router/RouterProvider';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'sonner';

import '@app/styles/main.scss';

createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider />
    <Toaster />
  </>
);
