/* import React from 'react'; */
import Container from '../../components/layout/Container/Container';
import Wrapper from '../../components/layout/Wrapper/Wrapper';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import RadioInput from '../../components/RadioInput/RadioInput';
import Button from '../../components/Button/Button';
import ButtonContainer from '../../components/Button/ButtonContainer/ButtonContainer';

import styles from './NoticeEnroll.module.scss';
import formStyles from '../../components/Form/Form.module.scss';

const NoticeEnroll = () => {
  return (
    <Container title="공지사항">
      <div className={styles.detailBadge}>상세</div>
      <Wrapper subTitle="등록">
        <Form label="구분" className={styles.BorderTop}>
          <RadioInput items={["일반 공지", "특별 공지"]} name="visibility" />
        </Form>
        <Form label="제목" subText="공지사항 제목을 입력해 주세요.">
          <Input type="text" placeholder="제목을 입력해 주세요" className={styles.inputField} />
        </Form>
        <Form label="내용" subText="공지사항 내용을 입력해 주세요.">
          <Input type="textarea" placeholder="내용을 입력해 주세요" className={styles.inputField} />
        </Form>
        <Form label="첨부 파일" subText="최대 3개의 파일 첨부가 가능합니다." className={formStyles.noBorderBottom}>
          <Input type="file" className={styles.inputField} />
          <Input type="file" className={styles.inputField} />
          <Input type="file" className={styles.inputField} />
        </Form>
        <ButtonContainer>
          <Button name="목록" size="enroll" />
          <Button name="등록" size="enroll" />
          <Button name="삭제" size="enroll" />
        </ButtonContainer>
      </Wrapper>
    </Container>
  );
};

export default NoticeEnroll;
