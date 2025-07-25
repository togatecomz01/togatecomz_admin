/* import React from 'react'; */
import Container from '../../components/layout/Container/Container';
import Wrapper from '../../components/layout/Wrapper/Wrapper';
import FormWrap from '../../components/FormWrap/FormWrap';
import Input from '../../components/Input/Input';
import RadioInput from '../../components/RadioInput/RadioInput';
import Button from '../../components/Button/Button';
import ButtonContainer from '../../components/Button/ButtonContainer/ButtonContainer';

import styles from './NoticeRegister.module.scss';
import formStyles from '../../components/FormWrap/FormWrap.module.scss';

const NoticeRegister = () => {
  return (
    <Container title="공지사항" tag='상세'>
      <Wrapper subTitle="등록">
        <FormWrap label="구분" className={styles.BorderTop}>
          <RadioInput items={['일반 공지', '특별 공지']} name="visibility" />
        </FormWrap>
        <FormWrap label="제목" subText="공지사항 제목을 입력해 주세요.">
          <Input type="text" placeholder="제목을 입력해 주세요" className={styles.inputField} />
        </FormWrap>
        <FormWrap label="내용" subText="공지사항 내용을 입력해 주세요.">
          <Input type="textarea" placeholder="내용을 입력해 주세요" className={styles.inputField} />
        </FormWrap>
        <FormWrap label="첨부 파일" subText="최대 3개의 파일 첨부가 가능합니다." className={formStyles.noBorderBottom}>
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

export default NoticeRegister;
