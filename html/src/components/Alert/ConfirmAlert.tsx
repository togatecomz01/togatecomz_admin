import { useNavigate } from 'react-router-dom';
import Alert from './Alert';
import Button from '../Button/Button';
import ButtonContainer from '../Button/ButtonContainer/ButtonContainer';

interface ConfirmAlertProps {
    message: string;
}

const ConfirmAlert = ({ message }: ConfirmAlertProps) => {
    const navigate = useNavigate();
    const handleConfirm = () => navigate(-1);

    return (
        <Alert message={message}>
        <ButtonContainer variant="alertSingleButton">
            <Button name="확인" onClick={handleConfirm} variant='alertConfirm'/>
        </ButtonContainer>
        </Alert>
    );
};

export default ConfirmAlert;