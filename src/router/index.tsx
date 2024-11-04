import { Route, Routes as ReactRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout.tsx';
export default function Routes() {
  return (
    <Layout>
      <ReactRouter>
        <Route path='/' element={<>hi</>} />
      </ReactRouter>
    </Layout>
  );
}
