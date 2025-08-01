import { useState } from 'react';
import Button from '../../components/Button/Button';
import ButtonContainer from '../../components/Button/ButtonContainer/ButtonContainer';
import FormWrap from '../../components/FormWrap/FormWrap';
import Input from '../../components/Input/Input';
import Container from '../../components/layout/Container/Container';
import Wrapper from '../../components/layout/SubHeader/SubHeader';
import RadioInput from '../../components/RadioInput/RadioInput';
import DeptPositionPopup from '../DEPT/togate-dept-00101';
import DividePopup from '../DVN/togate-dvn-00101';
import ConfirmAlert from '../../components/Alert/ConfirmAlert';
import ChoiceAlert from '../../components/Alert/ChoiceAlert';

const ComponentTest = () => {
  /* ---------------s: Popup 관련 상태 & 함수 ----------------------*/

  //DeptPositionPopup 상태
  const [deptPopupState, setDeptPopupState] = useState({
    isOpen: false,
    mode: 'register' as 'register' | 'modify',
  });

  //DividePopup 상태
  const [dividePopupState, setDividePopupState] = useState({
    isOpen: false,
    mode: 'register' as 'register' | 'modify',
  });

  //DeptPositionPopup 핸들러 함수
  const handleOpenDeptPopup = (mode: 'register' | 'modify') => {
    setDeptPopupState({ isOpen: true, mode: mode });
  };
  const handleCloseDeptPopup = () => {
    setDeptPopupState({ ...deptPopupState, isOpen: false });
  };

  //DividePopup 핸들러 함수
  const handleOpenDividePopup = (mode: 'register' | 'modify') => {
    setDividePopupState({ isOpen: true, mode: mode });
  };
  const handleCloseDividePopup = () => {
    setDividePopupState({ ...dividePopupState, isOpen: false });
  };

  /* ---------------e: Popup 관련 상태 & 함수 ----------------------*/

  /* ---------------s: alert 관련 상태 & 함수 ----------------------*/

  const [confirmAlertState, setConfirmAlertState] = useState({ isOpen: false, message: '' });
  const [choiceAlertState, setChoiceAlertState] = useState({ isOpen: false, message: '' });

  //ConfirmAlert 열기
  const handleOpenConfirmAlert = (message: string) => setConfirmAlertState({ isOpen: true, message: message });

  //ConfirmAlert 닫기 (onConfirm 역할)
  const handleCloseConfirmAlert = () => setConfirmAlertState({ isOpen: false, message: '' });

  //ChoiceAlert 열기
  const handleOpenChoiceAlert = (message: string) => setChoiceAlertState({ isOpen: true, message: message });

  //ChoiceAlert의 "확인"을 눌렀을 때
  const handleChoiceConfirm = () => {
    setChoiceAlertState({ isOpen: false, message: '' });
  };

  //ChoiceAlert의 "취소"를 눌렀을 때
  const handleChoiceCancel = () => {
    setChoiceAlertState({ isOpen: false, message: '' });
  };

  /* ---------------e: alert 관련 상태 & 함수 ----------------------*/
  return (
    <>
      <Container title="컴포넌트 테스트">
        <Wrapper subTitle="컴포넌트 테스트">
          <ButtonContainer>
            <Button name="삭제" />
            <Button name="등록" />
            <Button name="수정" />
          </ButtonContainer>
          <RadioInput items={['Option 1', 'Option 2', 'Option 3']} name="exampleRadio" />
          <FormWrap label="성명" subText="관리자 등록을 위해 필요한 정보를 입력하세요.">
            <Input type="text" placeholder="성명을 입력해주세요" />
            <Button name="중복확인" />
          </FormWrap>
        </Wrapper>

        <Wrapper subTitle="팝업 확인 버튼">
          <ButtonContainer>
            <Button name="부서/직책 등록 팝업" onClick={() => handleOpenDeptPopup('register')} />
            <Button name="부서/직책 수정 팝업" onClick={() => handleOpenDeptPopup('modify')} />
            <Button name="구분값 등록 팝업" onClick={() => handleOpenDividePopup('register')} />
            <Button name="구분값 수정 팝업" onClick={() => handleOpenDividePopup('modify')} />
          </ButtonContainer>
        </Wrapper>

        <Wrapper subTitle="알럿 확인 버튼">
          <ButtonContainer>
            <Button name="확인 알림 띄우기" onClick={() => handleOpenConfirmAlert('성명을 입력해 주세요')} />
            <Button name="선택 알림 띄우기" onClick={() => handleOpenChoiceAlert('변경된 내용으로\n수정하시겠습니까?')} />
          </ButtonContainer>
        </Wrapper>
      </Container>

      {deptPopupState.isOpen && <DeptPositionPopup mode={deptPopupState.mode} onClose={handleCloseDeptPopup} />}
      {dividePopupState.isOpen && <DividePopup mode={dividePopupState.mode} onClose={handleCloseDividePopup} />}

      {confirmAlertState.isOpen && <ConfirmAlert message={confirmAlertState.message} onConfirm={handleCloseConfirmAlert} />}
      {choiceAlertState.isOpen && <ChoiceAlert message={choiceAlertState.message} onConfirm={handleChoiceConfirm} onCancel={handleChoiceCancel} />}
    </>
  );
};

export default ComponentTest;
