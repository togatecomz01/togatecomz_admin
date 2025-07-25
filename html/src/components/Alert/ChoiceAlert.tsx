import { useNavigate } from 'react-router-dom';
import Alert from './Alert';
import Button from '../Button/Button';
import ButtonContainer from '../Button/ButtonContainer/ButtonContainer';
import alertStyles from './Alert.module.scss';

interface ChoiceAlertProps {
    message: string;
}

const ChoiceAlert = ({ /* message */ }: ChoiceAlertProps) => {
    const navigate = useNavigate();
    const handleChoice = () => navigate(-1);

    return (
        <Alert message={'수정된 사항을\n반영하시겠습니까?'} className={alertStyles.choiceLayout}> {/* 250725 기존과 스타일이 달라서 메시지를 여기서는 따로 줌 */}
            <ButtonContainer variant="alertDoubleButton">
                <Button name="취소" onClick={handleChoice} variant='popupDelete' className='delete'/>
                <Button name="확인" onClick={handleChoice} variant='popupModify'/>
            </ButtonContainer>
        </Alert>
    );
};

export default ChoiceAlert;