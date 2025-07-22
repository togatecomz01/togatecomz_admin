import React from 'react';
import Container from '../../components/layout/Container/Container';
import Wrapper from '../../components/layout/Wrapper/Wrapper';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import RadioInput from '../../components/RadioInput/RadioInput';
import Button from '../../components/Button/Button';
import ButtonContainer from '../../components/Button/ButtonContainer/ButtonContainer';

import styles from './NoticeModify.module.scss';

const NoticeModify = () => {
  return (
    <Container title="공지사항">
      <div className={styles.detailBadge}>상세</div>
      <Wrapper subTitle="수정">
        <Form label="구분">
          <RadioInput items={["특별 공지", "일반 공지"]} name="visibility" defaultValue="특별 공지" />
        </Form>
        <Form label="제목" subText="공지사항 제목을 입력하세요.">
          <Input type="text" placeholder="제목을 입력하세요" value='제목1' className={styles.inputField} />
        </Form>
        <Form label="공지사항 내용" subText="공지사항 내용을 입력하세요.">
          <Input type="textarea" placeholder="내용을 입력하세요" value='내용1' className={styles.inputField} />
        </Form>
        <Form label="첨부 파일">
          <Input type="file" className={styles.inputField} />
          <Input type="file" className={styles.inputField} />
          <Input type="file" className={styles.inputField} />
        </Form>
        <ButtonContainer>
          <Button name="목록" />
          <Button name="수정" />
        </ButtonContainer>
      </Wrapper>
    </Container>
  );
};

export default NoticeModify;
