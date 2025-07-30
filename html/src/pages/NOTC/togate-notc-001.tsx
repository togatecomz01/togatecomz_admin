/* import React from 'react'; */

import List from '../../components/List/List';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Container from '../../components/layout/Container/Container';
import EmptyContent from '../../components/EmptyContent/EmptyContent';
import SelectBox from '../../components/SelectBox/SelectBox';
import SubHeader from '../../components/layout/SubHeader/SubHeader';
import ButtonContainer from '../../components/Button/ButtonContainer/ButtonContainer';
import PaginationButton from '../../components/PaginationButton/PaginationButton';
import Wrapper from '../../components/Wrapper/Wrapper';
import { generalNoticeData, specialNoticeData, tableHeaders } from '../../constants/notice';

const NoticeList = () => {
  // 데이터 유무 여부 (t/f로 렌더링제어 (공지사항이 등록되지 않았습니다.))
  const isDataExist = true;

  return (
    <Container title="공지사항">
      <Wrapper>
        <SubHeader subTitle="특별공지" />
        {isDataExist ? <List headers={tableHeaders} listItems={specialNoticeData} /> : <EmptyContent message="특별공지사항이 등록되지 않았습니다." />}
      </Wrapper>
      <Wrapper>
        <SubHeader subTitle="일반공지">
          <SelectBox title="검색 기준" placeholder="제목" options={['제목', '작성자']} size="sm" />
          <Input type="search" placeholder="검색어 입력" />
          <Button name="조회" />
        </SubHeader>
      </Wrapper>
      {isDataExist ? <List headers={tableHeaders} listItems={generalNoticeData} /> : <EmptyContent message="일반공지사항이 등록되지 않았습니다." />}
      <ButtonContainer>
        {isDataExist && <PaginationButton />}
        <Button name="등록" />
      </ButtonContainer>
    </Container>
  );
};

export default NoticeList;
