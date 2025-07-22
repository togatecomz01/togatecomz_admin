import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout.tsx';
import Home from '../pages/Home/Home.tsx';
import NoticeList from '../pages/notice/noticeList';
import ComponentTest from '../pages/ComponentTest/ComponentTest.tsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="" element={<NoticeList />} />
          <Route path="" element={<Home />} />
          <Route path="component-test" element={<ComponentTest />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
