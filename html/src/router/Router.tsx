import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout.tsx';
import Home from '../pages/Home/Home.tsx';
import Notice from '../pages/notice/notice';
import ComponentTest from '../pages/ComponentTest/ComponentTest.tsx';
import Login from '../pages/Login/Login.tsx';
import AccountManage from '../pages/AccountManage/AccountManage.tsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="" element={<Notice />} />
          <Route path="" element={<Home />} />
          <Route path="component-test" element={<ComponentTest />} />
          <Route path="account-manage" element={<AccountManage />} />
        </Route>

        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
