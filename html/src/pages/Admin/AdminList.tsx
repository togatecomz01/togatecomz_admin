import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import ButtonContainer from '../../components/Button/ButtonContainer/ButtonContainer';
import Container from '../../components/layout/Container/Container';
import List from '../../components/layout/List/List';
import Wrapper from '../../components/layout/Wrapper/Wrapper';
import { ADMIN_HEADERS, ADMIN_LIST_ITEMS, ADMIN_LIST_ITEMS_MAIN } from '../../constants/Admin';

const AdminList = () => {
  return (
    <>
      <Container title="계정관리">
        <Wrapper subTitle="메인관리자">
          <List headers={ADMIN_HEADERS} listItems={ADMIN_LIST_ITEMS_MAIN}></List>
        </Wrapper>
        <Wrapper subTitle="관리자">
          <List headers={ADMIN_HEADERS} listItems={ADMIN_LIST_ITEMS}></List>
          <ButtonContainer>
            <Link to="/admin/register">
              <Button name="등록" />
            </Link>
          </ButtonContainer>
        </Wrapper>
      </Container>
    </>
  );
};

export default AdminList;
