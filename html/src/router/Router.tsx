import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout.tsx';
import ComponentTest from '../pages/ComponentTest/ComponentTest.tsx';
import Home from '../pages/Home/Home.tsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="component-test" element={<ComponentTest />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
