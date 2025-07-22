import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout.tsx';
import Home from '../pages/Home/Home.tsx';
import NoticeList from '../pages/notice/noticeList';
import ComponentTest from '../pages/ComponentTest/ComponentTest.tsx';
import Login from '../pages/Login/Login.tsx';
import AdminList from '../pages/Admin/AdminList.tsx';
import AdminRegister from '../pages/Admin/AdminRegister.tsx';
import AdminLayout from '../pages/Admin/AdminLayout.tsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="" element={<NoticeList />} />
          <Route path="" element={<Home />} />
          <Route path="component-test" element={<ComponentTest />} />
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<AdminList />} />
            <Route path="register" element={<AdminRegister />} />
          </Route>
        </Route>

        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
