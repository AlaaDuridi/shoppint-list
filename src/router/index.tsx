import { Route, Routes as ReactRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout.tsx';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('../views/Home.tsx'));
const NotFound = lazy(() => import('../views/NotFound.tsx'));
export default function Routes() {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <ReactRouter>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </ReactRouter>
      </Suspense>
    </Layout>
  );
}
