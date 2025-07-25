import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout.tsx';
import Home from '../pages/Home/Home.tsx';
import NoticeList from '../pages/notice/noticeList.tsx';
import ComponentTest from '../pages/ComponentTest/ComponentTest.tsx';
import Login from '../pages/Login/Login.tsx';

import AdminList from '../pages/Admin/AdminList.tsx';
import AdminRegister from '../pages/Admin/AdminRegister.tsx';
import AdminLayout from '../pages/Admin/AdminLayout.tsx';

import NoticeRegister from '../pages/notice/NoticeRegister.tsx';
import NoticeModify from '../pages/notice/NoticeModify.tsx';
import DeptPosition from '../pages/deptposition/deptposition.tsx';
import Divide from '../pages/Divide/Divide.tsx';
import RegisterPopup from '../components/layout/Popup/RegisterPopup.tsx';
import ModifyPopup from '../components/layout/Popup/ModifyPopup.tsx';
import DeptPositionPopup from '../components/layout/Popup/DeptPositionPopup.tsx';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="component-test" element={<ComponentTest />} />
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<AdminList />} />
            <Route path="register" element={<AdminRegister />} />
          </Route>

          <Route path="/notice" element={<NoticeList />} />
          <Route path="/notice/register" element={<NoticeRegister />} />
          <Route path="/notice/modify" element={<NoticeModify />} />
          <Route path="/deptposition" element={<DeptPosition />} />
          <Route path="/divide" element={<Divide />} />
          <Route path="/registerpopup" element={<RegisterPopup />} />
          <Route path="/modifypopup" element={<ModifyPopup />} />
          <Route path="/deptpositionpopup" element={<DeptPositionPopup />} /> 
        </Route>

        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
