// src/components/layout/Popup/DeptPositionPopup.tsx (새 파일)

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Popup from './Popup';
import Input from '../../Input/Input';
import RadioInput from '../../RadioInput/RadioInput';
import Button from '../../Button/Button';
import ButtonContainer from '../../Button/ButtonContainer/ButtonContainer';
import popupStyles from '../Popup/Popup.module.scss';
import warningIcon from '../../../assets/images/warning-icon.svg';

const DeptPositionPopup = () => {
    const navigate = useNavigate();
    // 이 에러 상태는 이제 두 번째 Input 필드에 적용해 보겠습니다.
    const [showError, setShowError] = useState(false);

    const handleClose = () => {
        navigate(-1);
    };

    const toggleError = () => {
        setShowError(!showError);
    };

    return (
        <Popup title="부서/직책 수정" onClose={handleClose}>
            <button onClick={toggleError} style={{ marginBottom: '20px', background: '#eee', padding: '5px' }}>
                에러 상태 토글 (확인용)
            </button>

            <div className={popupStyles.inputWrap}>
                <p>구분</p>
                <RadioInput 
                    items={['부서', '직책']} 
                    name="dept_position_type" 
                    defaultValue="부서"
                />
            </div>
            
            <div className={popupStyles.inputWrap}>
                <p>구분값</p> 
                <Input 
                    type="text" 
                    placeholder="부서 또는 직책명을 입력" 
                    className={showError ? popupStyles.error : ''}
                />
                
                {showError && (
                    <div className={popupStyles.warning}> {/* 점점 div가 많아지는데 컴포넌트화를 할지? */}
                        <img src={warningIcon} alt="warning" />
                        <p>구분을 입력해주세요</p>
                    </div>
                )}
            </div>

            <ButtonContainer variant="popupDoubleButton">
                <Button name="삭제" variant="popupDelete" />
                <Button name="수정" variant="popupModify" />
            </ButtonContainer>
        </Popup>
    );
};

export default DeptPositionPopup;