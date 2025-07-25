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
import DeptPositionPopup from '../components/layout/Popup/DeptPositionPopup.tsx';

import Divide from '../pages/Divide/Divide.tsx';
import DividePopup from '../components/layout/Popup/DividePopup.tsx';


import ConfirmAlert from '../components/Alert/ConfirmAlert.tsx';
import ChoiceAlert from '../components/Alert/ChoiceAlert.tsx';

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
          <Route path="/deptposition/register" element={<DeptPositionPopup mode="register" />} />
          <Route path="/deptposition/modify" element={<DeptPositionPopup mode="modify" />} />

          <Route path="/divide" element={<Divide />} />
          <Route path="/divide/register" element={<DividePopup mode="register" />} />
          <Route path="/divide/modify" element={<DividePopup mode="modify" />} />

          <Route path="/alert/confirm" element={<ConfirmAlert message="저장이 완료되었습니다." />} />
          <Route path="/alert/choice" element={<ChoiceAlert message="수정된 사항을 반영하시겠습니까?" />} />
        </Route>

        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
