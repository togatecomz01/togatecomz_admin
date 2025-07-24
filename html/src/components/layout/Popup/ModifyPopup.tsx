/* import React from 'react'; */
import Popup from './Popup';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import ButtonContainer from '../../Button/ButtonContainer/ButtonContainer';
import popupStyles from '../Popup/Popup.module.scss';

interface ModifyPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModifyPopup = ({ isOpen, onClose }: ModifyPopupProps) => {
  if (!isOpen) return null;

  return (
    <Popup title="수정" onClose={onClose}>
      <div className={popupStyles.inputWrap}>
        <p>구분</p>
        <Input type="text" placeholder="구분 입력" value='공지 입력'/>
      </div>
      
      <div className={popupStyles.inputWrap}>
        <p>구분값</p>
        <Input type="text" placeholder="구분값 입력" />
      </div>

      <ButtonContainer variant="popupDoubleButton">
        <Button name="삭제" variant="popupDelete" />
        <Button name="수정" variant="popupModify" />
      </ButtonContainer>
    </Popup>
  );
};

export default ModifyPopup;