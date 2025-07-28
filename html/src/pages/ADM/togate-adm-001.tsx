import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import ButtonContainer from '../../components/Button/ButtonContainer/ButtonContainer';
import Container from '../../components/layout/Container/Container';
import List from '../../components/List/List';
import { ADMIN_HEADERS, ADMIN_LIST_ITEMS, ADMIN_LIST_ITEMS_MAIN } from '../../constants/Admin';
import SubHeader from '../../components/layout/SubHeader/SubHeader';
import Wrapper from '../../components/Wrapper/Wrapper';

const AdminList = () => {
  return (
    <>
      <Container title="계정관리">
        <Wrapper>
          <SubHeader subTitle="메인관리자" />
          <List headers={ADMIN_HEADERS} listItems={ADMIN_LIST_ITEMS_MAIN} />
        </Wrapper>
        <Wrapper>
          <SubHeader subTitle="관리자" />
          <List headers={ADMIN_HEADERS} listItems={ADMIN_LIST_ITEMS} />
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
