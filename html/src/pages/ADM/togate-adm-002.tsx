import Button from '../../components/Button/Button';
import ButtonContainer from '../../components/Button/ButtonContainer/ButtonContainer';
import CheckboxInput from '../../components/CheckboxInput/CheckboxInput';
import FormTable from '../../components/FormTable/FormTable';
import FormWrap from '../../components/FormWrap/FormWrap';
import Input from '../../components/Input/Input';
import InputBtnContainer from '../../components/InputBtnContainer/InputBtnContainer';
import Container from '../../components/layout/Container/Container';
import SubHeader from '../../components/layout/SubHeader/SubHeader';
import RadioInput from '../../components/RadioInput/RadioInput';
import SelectBox from '../../components/SelectBox/SelectBox';
import { BASIC_FIELDS, MODIFY_FIELDS } from '../../constants/Admin';

const AdminForm = ({ mode }: { mode: 'register' | 'modify' }) => {
  return (
    <Container title="계정관리" tag="상세">
      {/* 1. 기본정보 */}
      <SubHeader subTitle="기본정보" />
      <FormTable>
        {(mode === 'modify' ? MODIFY_FIELDS : BASIC_FIELDS).map(field => (
          <FormWrap key={field.label} label={field.label} subText={field.subText} isAsterisk={field.required} subTextClassName={mode === 'modify' && field.label === '비밀번호' ? 'redText' : ''}>
            {field.inputs?.map((input, idx) =>
              input.withButton ? (
                <InputBtnContainer key={idx}>
                  <Input type={input.type} placeholder={input.placeholder} />
                  <Button name={input.withButton} />
                </InputBtnContainer>
              ) : (
                <Input key={idx} type={input.type} placeholder={input.placeholder} suffix={input.suffix} />
              )
            )}
            {field.selects?.map((select, idx) => (
              <SelectBox key={idx} title={field.label} placeholder={select.placeholder} options={select.options} size="lg" />
            ))}
          </FormWrap>
        ))}
      </FormTable>

      {/* 2. 권한정보 */}
      <SubHeader subTitle="권한정보" />
      <FormTable>
        {/* 구분 */}
        <FormWrap label="구분">
          <RadioInput items={['일반관리자', '보조관리자']} name="option1" />
        </FormWrap>
        {['구분값설정', '공지사항', '답변형게시판', '이력관리', '이벤트', '채용공고', '자료실', 'QnA'].map(i => (
          <FormWrap label={i}>
            <CheckboxInput items={['등록', '수정', '삭제']} name={i} />
          </FormWrap>
        ))}
      </FormTable>
      <ButtonContainer>
        <Button name="목록" />
        <Button name={mode === 'modify' ? '저장' : '등록'} />
        {mode === 'modify' && <Button name="삭제" />}
      </ButtonContainer>
    </Container>
  );
};

export default AdminForm;
