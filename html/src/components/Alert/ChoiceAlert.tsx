/* import { useNavigate } from 'react-router-dom'; */
import Alert from './Alert';
import Button from '../Button/Button';
import ButtonContainer from '../Button/ButtonContainer/ButtonContainer';
import alertStyles from './Alert.module.scss';

interface ChoiceAlertProps {
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
}

const ChoiceAlert = ({ message, onConfirm, onCancel }: ChoiceAlertProps) => {
    const handleConfirm = () => onConfirm();
    const handleCancel = () => onCancel();

    return (
        <Alert message={message} className={alertStyles.choiceLayout}>
            <ButtonContainer variant="alertDoubleButton">
                <Button name="취소" onClick={handleCancel} variant="popupDelete" className="delete" />
                <Button name="확인" onClick={handleConfirm} variant="alertSmallConfirm" />
            </ButtonContainer>
        </Alert>
    );
};

export default ChoiceAlert;
