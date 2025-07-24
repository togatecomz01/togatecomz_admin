import Button from '../../components/Button/Button';
import ButtonContainer from '../../components/Button/ButtonContainer/ButtonContainer';
import FormTable from '../../components/FormTable/FormTable';
import FormWrap from '../../components/FormWrap/FormWrap';
import Input from '../../components/Input/Input';
import InputBtnContainer from '../../components/InputBtnContainer/InputBtnContainer';
import Container from '../../components/layout/Container/Container';
import Wrapper from '../../components/layout/Wrapper/Wrapper';
import RadioInput from '../../components/RadioInput/RadioInput';
import SelectBox from '../../components/SelectBox/SelectBox';

const AdminRegister = () => {
  return (
    <>
      <Container title="계정관리" tag="상세">
        {/* 1. 기본정보 */}
        <Wrapper subTitle="기본정보">
          <FormTable>
            {/* 성명 */}
            <FormWrap label="성명" subText="관리자 등록을 위해 필요한 정보를 입력해 주세요." isAsterisk={true}>
              <Input type="text" placeholder="성명을 입력해 주세요." />
            </FormWrap>

            {/* 아이디 */}
            <FormWrap label="아이디" subText="사용하실 아이디를 입력해 주세요." isAsterisk={true}>
              <InputBtnContainer>
                <Input type="text" placeholder="아이디를 입력해 주세요." />
                <Button name="ID 중복확인" />
              </InputBtnContainer>
            </FormWrap>

            {/* 비밀번호 */}
            <FormWrap label="비밀번호" subText="비밀번호는 영문, 숫자 포함 8자리 이상 입력해야 합니다." isAsterisk={true}>
              <Input type="password" placeholder="비밀번호를 입력해 주세요." />
              <Input type="password" placeholder="비밀번호를 다시 입력해 주세요." />
            </FormWrap>

            {/* 부서/직책 선택 */}
            <FormWrap label="부서/직책 선택" subText="비밀번호는 영문, 숫자 포함 8자리 이상 입력해야 합니다." isAsterisk={true}>
              <SelectBox title={'부서/직책 선택'} placeholder={'부서를 선택해 주세요'} options={['부서1', '부서2', '부서3']} />
              <SelectBox title={'부서/직책 선택'} placeholder={'직책을 선택해 주세요'} options={['직책1', '직책2', '직책3']} />
            </FormWrap>

            {/* 주소입력 */}
            <FormWrap label="주소입력" subText="기본주소와 상세주소를 입력해 주세요.">
              <Input type="text" placeholder="기본주소를 입력해 주세요" />
              <Input type="text" placeholder="상세 주소를 입력해 주세요" />
            </FormWrap>

            {/* 전화번호 */}
            <FormWrap label="전화번호" subText="전화번호를 입력해 주세요.">
              <Input type="number" placeholder="전화번호를 입력해 주세요" />
            </FormWrap>

            {/* 휴대폰번호 */}
            <FormWrap label="휴대폰번호" subText="휴대폰번호를 입력해 주세요.">
              <Input type="number" placeholder="휴대폰번호를 입력해 주세요" />
            </FormWrap>

            {/* 이메일 */}
            <FormWrap label="이메일" subText="사용하시는 이메일을 입력해 주세요.">
              <Input type="email" placeholder="이메일을 입력해 주세요" />
            </FormWrap>

            {/* 사원번호 */}
            <FormWrap label="사원번호" subText="사원번호를 입력해 주세요.">
              <Input type="number" placeholder="사원번호를 입력해 주세요" />
            </FormWrap>

            {/* 첨부파일 */}
            <FormWrap label="첨부파일" subText="썸네일 이미지를 첨부해 주세요. ex) 증명사진">
              <Input type="file" />
            </FormWrap>
          </FormTable>
        </Wrapper>

        {/* 2. 권한정보 */}
        <Wrapper subTitle="권한정보">
          <FormTable>
            {/* 구분 */}
            <FormWrap label="구분">
              <RadioInput items={['일반관리자', '보조관리자']} name="option1" />
            </FormWrap>
            {/* 구분값설정 */}
            <FormWrap label="구분값설정">
              <Input type="checkbox" items={['등록', '수정', '삭제']} />
            </FormWrap>
            {/* 공지사항 */}
            <FormWrap label="공지사항">
              <Input type="checkbox" items={['등록', '수정', '삭제']} />
            </FormWrap>
            {/* 답변형게시판 */}
            <FormWrap label="답변형게시판">
              <Input type="checkbox" items={['등록', '수정', '삭제']} />
            </FormWrap>
            {/* 이력관리 */}
            <FormWrap label="이력관리">
              <Input type="checkbox" items={['등록', '수정', '삭제']} />
            </FormWrap>
            {/* 이벤트 */}
            <FormWrap label="이벤트">
              <Input type="checkbox" items={['등록', '수정', '삭제']} />
            </FormWrap>
            {/* 채용공고 */}
            <FormWrap label="채용공고">
              <Input type="checkbox" items={['등록', '수정', '삭제']} />
            </FormWrap>
            {/* 자료실 */}
            <FormWrap label="자료실">
              <Input type="checkbox" items={['등록', '수정', '삭제']} />
            </FormWrap>
            {/* QnA */}
            <FormWrap label="QnA">
              <Input type="checkbox" items={['등록', '수정', '삭제']} />
            </FormWrap>
          </FormTable>
        </Wrapper>
        <ButtonContainer>
          <Button name="목록" />
          <Button name="저장" />
          <Button name="삭제" />
        </ButtonContainer>
      </Container>
    </>
  );
};

export default AdminRegister;
