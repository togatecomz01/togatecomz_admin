import { Routes, Route, HashRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout.tsx';
import Home from '../pages/Home/Home.tsx';
import Notice from '../pages/notice/notice';

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="" element={<Notice />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
