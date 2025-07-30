import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout.tsx';
import Home from '../pages/Home/Home.tsx';

import NoticeList from '../pages/NOTC/togate-notc-001.tsx';
import NoticeForm from '../pages/NOTC/togate-notc-002.tsx';

import ComponentTest from '../pages/ComponentTest/ComponentTest.tsx';
import Login from '../pages/LOG/togate-log-001.tsx';

import AdminList from '../pages/ADM/togate-adm-001.tsx';
import AdminLayout from '../pages/ADM/AdminLayout.tsx';

import DeptPosition from '../pages/DEPT/togate-dept-001.tsx';
import DeptPositionPopup from '../pages/DEPT/togate-dept-00101.tsx';

import Divide from '../pages/DVN/togate-dvn-001.tsx';
import DividePopup from '../pages/DVN/togate-dvn-00101.tsx';

import ConfirmAlert from '../components/Alert/ConfirmAlert.tsx';
import ChoiceAlert from '../components/Alert/ChoiceAlert.tsx';
import AdminForm from '../pages/ADM/togate-adm-002.tsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="component-test" element={<ComponentTest />} />
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<AdminList />} />
            <Route path="register" element={<AdminForm mode="register" />} />
            <Route path="modify" element={<AdminForm mode="modify" />} />
          </Route>
          <Route path="/notice" element={<NoticeList />} />
          <Route path="/notice/register" element={<NoticeForm mode="register" />} /> {/* (notc-002) 250728 라우터 수정 해야할지 고민 (admin처럼 중첩라우팅 필요한가?) */}
          <Route path="/notice/modify" element={<NoticeForm mode="modify" />} />
          {/* notc-003 (002,003 동일한 페이지)*/}
          <Route path="/deptpo" element={<DeptPosition />} />
          <Route path="/deptpo/register" element={<DeptPositionPopup mode="register" />} />
          <Route path="/deptpo/modify" element={<DeptPositionPopup mode="modify" />} />
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
