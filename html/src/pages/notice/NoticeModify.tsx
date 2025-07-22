import React from 'react';
import Container from '../../components/layout/Container/Container';
import Wrapper from '../../components/layout/Wrapper/Wrapper';
import FormWrap from '../../components/FormWrap/FormWrap';
import Input from '../../components/Input/Input';
import RadioInput from '../../components/RadioInput/RadioInput';
import Button from '../../components/Button/Button';
import ButtonContainer from '../../components/Button/ButtonContainer/ButtonContainer';

import styles from './NoticeModify.module.scss';

const NoticeModify = () => {
  return (
    <Container title="공지사항"> 
      <Wrapper subTitle="공지사항">
        <FormWrap text="공개 여부">
          <RadioInput items={["특별 공지", "일반 공지"]} name="visibility" />
        </FormWrap>
        <FormWrap text="제목" subText="공지사항 제목을 입력하세요.">
          <Input type="text" placeholder="제목을 입력하세요" className={styles.inputField} />
        </FormWrap>
        <FormWrap text="공지사항 내용" subText="공지사항 내용을 입력하세요.">
          <Input type="textarea" placeholder="내용을 입력하세요" className={styles.inputField} />
        </FormWrap>
        <FormWrap text="첨부 파일">
          <Input type="file" className={styles.inputField} />
          <Input type="file" className={styles.inputField} />
          <Input type="file" className={styles.inputField} />
        </FormWrap>
        <ButtonContainer>
          <Button name="목록" />
          <Button name="등록" />
        </ButtonContainer>
      </Wrapper>
    </Container>
  );
};

export default NoticeModify;
