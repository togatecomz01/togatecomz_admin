import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout.tsx';
import Home from '../pages/Home/Home.tsx';
import NoticeList from '../pages/notice/noticeList';
import ComponentTest from '../pages/ComponentTest/ComponentTest.tsx';
import Login from '../pages/Login/Login.tsx';
import AccountManage from '../pages/AccountManage/AccountManage.tsx';
import NoticeModify from '../pages/notice/NoticeModify';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/notice" element={<NoticeList />} />
          <Route path="" element={<Home />} />
          <Route path="component-test" element={<ComponentTest />} />
          <Route path="account-manage" element={<AccountManage />} />
          <Route path="/notice/modify" element={<NoticeModify />} />
        </Route>

        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
