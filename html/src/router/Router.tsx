import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout.tsx';
import Home from '../pages/Home/Home.tsx';
import NoticeList from '../pages/notice/noticeList.tsx';
import ComponentTest from '../pages/ComponentTest/ComponentTest.tsx';
import Login from '../pages/Login/Login.tsx';
import AccountManage from '../pages/AccountManage/AccountManage.tsx';

import NoticeEnroll from '../pages/notice/NoticeEnroll.tsx';
import NoticeModify from '../pages/notice/NoticeModify.tsx';
import DeptPosition from '../pages/deptposition/deptposition.tsx';
import Divide from '../pages/Divide/Divide.tsx';
import ManagerRegister from '../pages/ManagerRegister/ManagerRegister.tsx';


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/notice" element={<NoticeList />} />
          <Route path="" element={<Home />} />
          <Route path="component-test" element={<ComponentTest />} />
          <Route path="account-manage" element={<AccountManage />} />

          <Route path="/notice/enroll" element={<NoticeEnroll />} />
          <Route path="/notice/modify" element={<NoticeModify />} />
          <Route path="/deptposition" element={<DeptPosition />} />
          <Route path="/divide" element={<Divide />} />
          <Route path="/manager-register" element={<ManagerRegister />} />
        </Route>

        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
