/* import React from 'react'; */

import List from '../../components/layout/List/List';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Container from '../../components/layout/Container/Container';
import EmptyContent from '../../components/EmptyContent/EmptyContent';
import SelectBox from '../../components/SelectBox/SelectBox';
import SubHeader from '../../components/layout/SubHeader/SubHeader';
import ButtonContainer from '../../components/Button/ButtonContainer/ButtonContainer';
import PaginationButton from '../../components/layout/PaginationButton/PaginationButton';
import Wrapper from '../../components/Wrapper/Wrapper';

const NoticeList = () => {
  const specialNoticeData = [
    {
      no: 1,
      title: '첫 번째 특별 공지사항입니다. 첫 번째 특별 공지사항입니다. 첫 번째 특별 공지사항입니다. 첫 번째 특별 공지사항입니다.',
      views: 123,
      author: '관리자1',
      createdAt: '2025-07-20',
      modifier: '관리자1',
      modifiedAt: '2025-07-20',
    },
    {
      no: 2,
      title: '두 번째 특별 공지사항입니다.',
      views: 456,
      author: '관리자2',
      createdAt: '2025-07-19',
      modifier: '관리자2',
      modifiedAt: '2025-07-19',
    },
    {
      no: 3,
      title: '세 번째 특별 공지사항입니다.',
      views: 789,
      author: '관리자1',
      createdAt: '2025-07-18',
      modifier: '관리자1',
      modifiedAt: '2025-07-18',
    },
  ];

  const generalNoticeData = [
    {
      no: 10,
      title: '일반 공지사항 10번입니다.',
      views: 50,
      author: '홍길동',
      createdAt: '2025-07-15',
      modifier: '홍길동',
      modifiedAt: '2025-07-15',
    },
    {
      no: 11,
      title: '일반 공지사항 11번입니다.',
      views: 60,
      author: '홍길동',
      createdAt: '2025-07-14',
      modifier: '홍길동',
      modifiedAt: '2025-07-14',
    },
    {
      no: 12,
      title: '일반 공지사항 12번입니다.',
      views: 70,
      author: '홍길동',
      createdAt: '2025-07-13',
      modifier: '홍길동',
      modifiedAt: '2025-07-13',
    },
    {
      no: 13,
      title: '일반 공지사항 13번입니다.',
      views: 80,
      author: '홍길동',
      createdAt: '2025-07-12',
      modifier: '홍길동', 
      modifiedAt: '2025-07-12',
    },
    {
      no: 14,
      title: '일반 공지사항 14번입니다.',
      views: 90,
      author: '홍길동',
      createdAt: '2025-07-11',
      modifier: '홍길동',
      modifiedAt: '2025-07-11',
    },
    {
      no: 15,
      title: '일반 공지사항 15번입니다.',
      views: 100,
      author: '홍길동',
      createdAt: '2025-07-10',
      modifier: '홍길동',
      modifiedAt: '2025-07-10',
    },
    {
      no: 16,
      title: '일반 공지사항 16번입니다.',
      views: 110,
      author: '홍길동',
      createdAt: '2025-07-09',
      modifier: '홍길동',
      modifiedAt: '2025-07-09',
    },
    {
      no: 17,
      title: '일반 공지사항 17번입니다.',
      views: 120,
      author: '홍길동',
      createdAt: '2025-07-08',
      modifier: '홍길동',
      modifiedAt: '2025-07-08',
    },
    {
      no: 18,
      title: '일반 공지사항 18번입니다.',
      views: 130,
      author: '홍길동',
      createdAt: '2025-07-07',
      modifier: '홍길동',
      modifiedAt: '2025-07-07',
    },
    {
      no: 19,
      title: '일반 공지사항 19번입니다.',
      views: 140,
      author: '홍길동',
      createdAt: '2025-07-06',
      modifier: '홍길동',
      modifiedAt: '2025-07-06',
    },
    {
      no: 20,
      title: '일반 공지사항 20번입니다.',
      views: 150,
      author: '홍길동',
      createdAt: '2025-07-05',
      modifier: '홍길동',
      modifiedAt: '2025-07-05',
    },
  ];

  const tableHeaders = [
    { text: 'NO', value: 'no', width: 'xxs' },
    { text: '제목', value: 'title', width: 'xlxl' },
    { text: '조회', value: 'views', width: 'mxs' },
    { text: '작성자', value: 'author', width: 'xs' },
    { text: '작성일', value: 'createdAt', width: 'xs' },
    { text: '수정자', value: 'modifier', width: 'xs' },
    { text: '수정일', value: 'modifiedAt', width: 'mxs' },
  ];

  // 데이터 유무 여부
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
