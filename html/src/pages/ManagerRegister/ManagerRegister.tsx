import Button from '../../components/Button/Button';
import ButtonContainer from '../../components/Button/ButtonContainer/ButtonContainer';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import Container from '../../components/layout/Container/Container';
import Wrapper from '../../components/layout/Wrapper/Wrapper';
const ManagerRegister = () => {
  return (
    <>
      <Container title="계정관리">
        <Wrapper subTitle="기본정보">
          <Form
            label="성명"
            subText="관리자 등록을 위해 필요한 정보를 입력해 주세요."
          >
            <Input type="text" placeholder="성명을 입력해 주세요." />
          </Form>
        </Wrapper>
        <ButtonContainer>
          <Button name="목록" />
          <Button name="등록" />
        </ButtonContainer>
      </Container>
    </>
  );
};

export default ManagerRegister;
