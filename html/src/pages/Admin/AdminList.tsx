import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import ButtonContainer from '../../components/Button/ButtonContainer/ButtonContainer';
import Container from '../../components/layout/Container/Container';
import List from '../../components/layout/List/List';
import Wrapper from '../../components/layout/Wrapper/Wrapper';

const HEADERS = [
  { text: '성명', value: 'name' },
  { text: '부서', value: 'department' },
  { text: '구분', value: 'role' },
  { text: '직책', value: 'position' },
  { text: '연락처', value: 'contact' },
  { text: '이메일', value: 'email' },
];

const MAIN_LIST_ITEMS = [
  {
    name: '김메인',
    department: '전산팀',
    role: '메인관리자',
    position: '대리',
    contact: '+82 10-0000-0000',
    email: 'abc@gmail.com',
  },
];

const LIST_ITEMS = [
  {
    name: '김메인',
    department: '전산팀',
    role: '메인관리자',
    position: '대리',
    contact: '+82 10-0000-0000',
    email: 'abc@gmail.com',
  },
  {
    name: '김메인',
    department: '전산팀',
    role: '메인관리자',
    position: '대리',
    contact: '+82 10-0000-0000',
    email: 'abc@gmail.com',
  },
  {
    name: '김메인',
    department: '전산팀',
    role: '메인관리자',
    position: '대리',
    contact: '+82 10-0000-0000',
    email: 'abc@gmail.com',
  },
  {
    name: '김메인',
    department: '전산팀',
    role: '메인관리자',
    position: '대리',
    contact: '+82 10-0000-0000',
    email: 'abc@gmail.com',
  },
  {
    name: '김메인',
    department: '전산팀',
    role: '메인관리자',
    position: '대리',
    contact: '+82 10-0000-0000',
    email: 'abc@gmail.com',
  },
];

const AdminList = () => {
  return (
    <>
      <Container title="계정관리">
        <Wrapper subTitle="메인관리자">
          <List headers={HEADERS} listItems={MAIN_LIST_ITEMS}></List>
        </Wrapper>
        <Wrapper subTitle="관리자">
          <List headers={HEADERS} listItems={LIST_ITEMS}></List>
        </Wrapper>
        <ButtonContainer>
          <Link to="/admin/register">
            <Button name="등록" />
          </Link>
        </ButtonContainer>
      </Container>
    </>
  );
};

export default AdminList;
