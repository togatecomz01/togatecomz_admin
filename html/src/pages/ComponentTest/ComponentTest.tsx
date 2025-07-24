import Button from '../../components/Button/Button';
import ButtonContainer from '../../components/Button/ButtonContainer/ButtonContainer';
import FormWrap from '../../components/FormWrap/FormWrap';
import Input from '../../components/Input/Input';
import Container from '../../components/layout/Container/Container';
import Wrapper from '../../components/layout/Wrapper/Wrapper';
import RadioInput from '../../components/RadioInput/RadioInput';
import { usePopup } from '../../contexts/PopupContext';

const ComponentTest = () => {
  const { openPopup } = usePopup();

  return (
    <>
      <Container title="컴포넌트 테스트">
        <Wrapper subTitle="컴포넌트 테스트">
          <ButtonContainer>
            <Button name="삭제" onClick={() => openPopup({ message: '저장되었습니다', button: '확인' })} />
            <Button name="등록" />
            <Button name="수정" />
          </ButtonContainer>
          <RadioInput items={['Option 1', 'Option 2', 'Option 3']} name="exampleRadio" />
          <FormWrap label="성명" subText="관리자 등록을 위해 필요한 정보를 입력하세요.">
            <Input type="text" placeholder="성명을 입력해주세요" />
            <Button name="중복확인" />
          </FormWrap>
        </Wrapper>
      </Container>
    </>
  );
};

export default ComponentTest;
