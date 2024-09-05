import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { MainLayout } from './layouts/MainLayout';
import { RatedPage } from './pages/rated';
import { Auth } from './pages/auth';
import { MediaListPage } from './pages/media-list-page';
import { MediaSinglePage } from './pages/media-single-page';

const App = () => {
  const client = new QueryClient();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MediaListPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/rated" element={<RatedPage />} />
        <Route path="/:act/:id" element={<MediaSinglePage />} />
        <Route path="*" element={<>err304</>} />
      </Route>,
    ),
  );

  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
