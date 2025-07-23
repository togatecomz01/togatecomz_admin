import Button from '../../components/Button/Button';
import ButtonContainer from '../../components/Button/ButtonContainer/ButtonContainer';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import Container from '../../components/layout/Container/Container';
import Wrapper from '../../components/layout/Wrapper/Wrapper';
import RadioInput from '../../components/RadioInput/RadioInput';
import SelectBox from '../../components/SelectBox/SelectBox';

const AdminRegister = () => {
  return (
    <>
      <Container title="계정관리">
        {/* 1. 기본정보 */}
        <Wrapper subTitle="기본정보">
          {/* 성명 */}
          <Form
            label="성명"
            subText="관리자 등록을 위해 필요한 정보를 입력해 주세요."
          >
            <Input type="text" placeholder="성명을 입력해 주세요." />
          </Form>

          {/* 아이디 */}
          <Form label="아이디" subText="사용하실 아이디를 입력해 주세요.">
            <Input type="text" placeholder="아이디를 입력해 주세요." />
            <Button name="ID 중복확인" />
          </Form>

          {/* 비밀번호 */}
          <Form
            label="비밀번호"
            subText="비밀번호는 영문, 숫자 포함 8자리 이상 입력해야 합니다."
          >
            <div style={{ display: 'grid' }}>
              <Input type="password" placeholder="비밀번호를 입력해 주세요." />
              <Input
                type="password"
                placeholder="비밀번호를 다시 입력해 주세요."
              />
            </div>
          </Form>

          {/* 부서/직책 선택 */}
          <Form
            label="부서/직책 선택"
            subText="비밀번호는 영문, 숫자 포함 8자리 이상 입력해야 합니다."
          >
            <div>
              <SelectBox
                title={'부서/직책 선택'}
                placeholder={'부서를 선택해 주세요'}
                options={['부서1', '부서2', '부서3']}
              />
              <SelectBox
                title={'부서/직책 선택'}
                placeholder={'직책을 선택해 주세요'}
                options={['직책1', '직책2', '직책3']}
              />
            </div>
          </Form>

          {/* 주소입력 */}
          <Form label="주소입력" subText="기본주소와 상세주소를 입력해 주세요.">
            <div>
              <Input type="text" placeholder="기본주소를 입력해 주세요" />
              <Input type="text" placeholder="상세 주소를 입력해 주세요" />
            </div>
          </Form>

          {/* 전화번호 */}
          <Form label="전화번호" subText="전화번호를 입력해 주세요.">
            <Input type="number" placeholder="전화번호를 입력해 주세요" />
          </Form>

          {/* 휴대폰번호 */}
          <Form label="휴대폰번호" subText="휴대폰번호를 입력해 주세요.">
            <Input type="number" placeholder="휴대폰번호를 입력해 주세요" />
          </Form>

          {/* 이메일 */}
          <Form label="이메일" subText="사용하시는 이메일을 입력해 주세요.">
            <Input type="email" placeholder="이메일을 입력해 주세요" />
          </Form>

          {/* 사원번호 */}
          <Form label="사원번호" subText="사원번호를 입력해 주세요.">
            <Input type="number" placeholder="사원번호를 입력해 주세요" />
          </Form>

          {/* 첨부파일 */}
          <Form
            label="첨부파일"
            subText="썸네일 이미지를 첨부해 주세요. ex) 증명사진"
          >
            <Input type="image" />
            <Button name="찾아보기" />
          </Form>
        </Wrapper>

        {/* 2. 권한정보 */}
        <Wrapper subTitle="권한정보">
          {/* 구분 */}
          <Form label="구분">
            <RadioInput items={['일반관리자', '보조관리자']} name="option1" />
          </Form>
          {/* 구분값설정 */}
          <Form label="구분값설정">
            <Input type="checkbox" items={['등록', '수정', '삭제']} />
          </Form>
          {/* 공지사항 */}
          <Form label="공지사항">
            <Input type="checkbox" items={['등록', '수정', '삭제']} />
          </Form>
          {/* 답변형게시판 */}
          <Form label="답변형게시판">
            <Input type="checkbox" items={['등록', '수정', '삭제']} />
          </Form>
          {/* 이력관리 */}
          <Form label="이력관리">
            <Input type="checkbox" items={['등록', '수정', '삭제']} />
          </Form>
          {/* 이벤트 */}
          <Form label="이벤트">
            <Input type="checkbox" items={['등록', '수정', '삭제']} />
          </Form>
          {/* 채용공고 */}
          <Form label="채용공고">
            <Input type="checkbox" items={['등록', '수정', '삭제']} />
          </Form>
          {/* 자료실 */}
          <Form label="자료실">
            <Input type="checkbox" items={['등록', '수정', '삭제']} />
          </Form>
          {/* QnA */}
          <Form label="QnA">
            <Input type="checkbox" items={['등록', '수정', '삭제']} />
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

export default AdminRegister;
