import { Routes, Route, HashRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout.tsx';
import Home from '../pages/Home/Home';

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
