import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout.tsx';
import ComponentTest from '../pages/ComponentTest/ComponentTest.tsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="" element={<ComponentTest />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
