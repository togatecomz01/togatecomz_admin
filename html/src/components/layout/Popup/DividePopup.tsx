/* import React from 'react'; */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Popup from './Popup';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import ButtonContainer from '../../Button/ButtonContainer/ButtonContainer';
import popupStyles from '../Popup/Popup.module.scss';
import warningIcon from '../../../assets/images/warning-icon.svg';


interface DividePopupProps {
    mode: 'register' | 'modify';
}


const DividePopup = ({ mode }: DividePopupProps) => {
    const navigate = useNavigate();
    const [showError, setShowError] = useState(false);
    const isRegisterMode = mode === 'register';
    const title = isRegisterMode ? '등록' : '수정';
    const submitButtonName = isRegisterMode ? '등록' : '수정';


    const handleClose = () => {
        navigate(-1);
    };

    const toggleError = () => {
        setShowError(!showError);
    };

    return (
        <Popup title={title} onClose={handleClose}>
            <button onClick={toggleError} style={{ marginBottom: '20px', background: '#eee', padding: '5px' }}>
                에러 상태 토글 (확인용)
            </button>

            <div className={popupStyles.inputWrap}>
                <p>구분</p>
                <Input type="text" placeholder="구분 입력" className={showError ? popupStyles.error : ''}/>
                
                {showError && (
                    <div className={popupStyles.warning}>
                        <img src={warningIcon} alt="warning" />
                        <p>구분을 입력해주세요</p>
                    </div>
                )}
            </div>
            
            <div className={popupStyles.inputWrap}>
                <p>구분값</p>
                <Input type="text" placeholder="구분값 입력" />
            </div>

            <ButtonContainer variant="popupDoubleButton">
                {!isRegisterMode && <Button name="삭제" variant="popupDelete" />}
                <Button name={submitButtonName} variant="popupModify" />
            </ButtonContainer>
        </Popup>
    );
};

export default DividePopup;