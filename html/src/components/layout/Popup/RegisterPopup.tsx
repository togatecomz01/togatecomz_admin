/* import React from 'react'; */
import Popup from './Popup';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import ButtonContainer from '../../Button/ButtonContainer/ButtonContainer';
import popupStyles from '../Popup/Popup.module.scss';

interface RegisterPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegisterPopup = ({ isOpen, onClose }: RegisterPopupProps) => {
  if (!isOpen) return null;

  return (
    <Popup title="등록" onClose={onClose}>
      <div className={popupStyles.inputWrap}> {/* 여기도 컴포넌트화? 놔두기? */}
        <p>구분</p>
        <Input type="text" placeholder="구분 입력" />
      </div>
      <div className={popupStyles.inputWrap}>
        <p>구분값</p>
        <Input type="text" placeholder="구분값 입력" />
      </div>
      <ButtonContainer variant="popupSingleButton">
        <Button name="등록" variant="popupRegister" />
      </ButtonContainer>
    </Popup>
  );
};

export default RegisterPopup;