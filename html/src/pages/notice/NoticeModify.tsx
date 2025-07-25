/* import React from 'react'; */
import Container from '../../components/layout/Container/Container';
import FormWrap from '../../components/FormWrap/FormWrap';
import Input from '../../components/Input/Input';
import RadioInput from '../../components/RadioInput/RadioInput';
import Button from '../../components/Button/Button';
import ButtonContainer from '../../components/Button/ButtonContainer/ButtonContainer';

import SubHeader from '../../components/layout/SubHeader/SubHeader';
import FormTable from '../../components/FormTable/FormTable';

const NoticeRegister = () => {
  return (
    <Container title="공지사항" tag="상세">
      <SubHeader subTitle="수정" />
      <FormTable>
        <FormWrap label="구분">
          <RadioInput items={['일반공지', '특별공지']} name="visibility" />
        </FormWrap>
        <FormWrap label="제목" subText="공지사항 제목을 입력해 주세요.">
          <Input type="text" placeholder="제목을 입력해 주세요" />
        </FormWrap>
        <FormWrap label="내용" subText="공지사항 내용을 입력해 주세요.">
          <Input type="textarea" placeholder="내용을 입력해 주세요" />
        </FormWrap>
        <FormWrap label="첨부 파일" subText="최대 3개의 파일 첨부가 가능합니다.">
          <Input type="file" />
          <Input type="file" />
          <Input type="file" />
        </FormWrap>
      </FormTable>

      <ButtonContainer>
        <Button name="목록" />
        <Button name="저장" />
        <Button name="삭제" />
      </ButtonContainer>
    </Container>
  );
};

export default NoticeRegister;
