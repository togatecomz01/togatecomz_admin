import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Popup from '../../components/Popup/Popup';
import Input from '../../components/Input/Input';
import RadioInput from '../../components/RadioInput/RadioInput';
import RadioStyles from '../../components/RadioInput/RadioInput.module.scss';
import Button from '../../components/Button/Button';
import ButtonContainer from '../../components/Button/ButtonContainer/ButtonContainer';
import popupStyles from '../../components/Popup/Popup.module.scss';
import warningIcon from '@/assets/images/warning-icon.svg';

interface DeptPositionPopupProps {
  mode: 'register' | 'modify';
}

const DeptPositionPopup = ({ mode }: DeptPositionPopupProps) => {
  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);

  const isRegisterMode = mode === 'register';

  const title = isRegisterMode ? '등록' : '수정';
  const submitButtonName = isRegisterMode ? '등록' : '수정';
  const submitButtonVariant = isRegisterMode ? 'popupRegister' : 'popupModify';

  const handleClose = () => {
    navigate(-1);
  };

  const toggleError = () => {
    setShowError(!showError);
  };

  return (
    <Popup title={title} onClose={handleClose}>
      {/* 확인 필요 시 display: none 해제 후 확인 */}
      <button onClick={toggleError} style={{ marginBottom: '20px', background: '#eee', padding: '5px', display: 'none' }}>
        에러 상태 토글 (확인용)
      </button>

      <div className={popupStyles.inputWrap}>
        <p>구분</p>
        <RadioInput items={['부서', '직책']} name="dept_position_type" className={RadioStyles.deptpoWrapper} />
      </div>

      <div className={popupStyles.inputWrap}>
        <p>구분값</p>
        <Input type="text" placeholder="구분값 입력" className={showError ? popupStyles.error : ''} largeWrapper="largeWrapper">
          {showError && (
            <div className={popupStyles.warning}>
              <img src={warningIcon} alt="warning" />
              <p>구분을 입력해주세요</p>
            </div>
          )}
        </Input>
      </div>

      <ButtonContainer variant="popupDoubleButton">
        {!isRegisterMode && <Button name="삭제" variant="popupDelete" />}
        <Button name={submitButtonName} variant={submitButtonVariant} />
      </ButtonContainer>
    </Popup>
  );
};

export default DeptPositionPopup;
