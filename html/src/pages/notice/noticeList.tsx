import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './noticeList.module.scss';
import List from '../../components/layout/List/List';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Container from '../../components/layout/Container/Container';
import Wrapper from '../../components/layout/Wrapper/Wrapper';
import EmptyContent from '../../components/EmptyContent/EmptyContent';
import SelectBox from '../../components/SelectBox/SelectBox';
import DS_Store from '../../assets/images/DS_Store.png';

const NoticeList = () => {
  const navigate = useNavigate();
  const specialNoticeData = [
    {
      no: 1,
      title: '첫 번째 특별 공지사항입니다.',
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
      author: '일반관리자',
      createdAt: '2025-07-15',
      modifier: '일반관리자',
      modifiedAt: '2025-07-15',
    },
    {
      no: 11,
      title: '일반 공지사항 11번입니다.',
      views: 60,
      author: '일반관리자',
      createdAt: '2025-07-14',
      modifier: '일반관리자',
      modifiedAt: '2025-07-14',
    },
    {
      no: 12,
      title: '일반 공지사항 12번입니다.',
      views: 70,
      author: '일반관리자',
      createdAt: '2025-07-13',
      modifier: '일반관리자',
      modifiedAt: '2025-07-13',
    },
    {
      no: 13,
      title: '일반 공지사항 13번입니다.',
      views: 80,
      author: '일반관리자',
      createdAt: '2025-07-12',
      modifier: '일반관리자',
      modifiedAt: '2025-07-12',
    },
    {
      no: 14,
      title: '일반 공지사항 14번입니다.',
      views: 90,
      author: '일반관리자',
      createdAt: '2025-07-11',
      modifier: '일반관리자',
      modifiedAt: '2025-07-11',
    },
    {
      no: 15,
      title: '일반 공지사항 15번입니다.',
      views: 100,
      author: '일반관리자',
      createdAt: '2025-07-10',
      modifier: '일반관리자',
      modifiedAt: '2025-07-10',
    },
    {
      no: 16,
      title: '일반 공지사항 16번입니다.',
      views: 110,
      author: '일반관리자',
      createdAt: '2025-07-09',
      modifier: '일반관리자',
      modifiedAt: '2025-07-09',
    },
    {
      no: 17,
      title: '일반 공지사항 17번입니다.',
      views: 120,
      author: '일반관리자',
      createdAt: '2025-07-08',
      modifier: '일반관리자',
      modifiedAt: '2025-07-08',
    },
    {
      no: 18,
      title: '일반 공지사항 18번입니다.',
      views: 130,
      author: '일반관리자',
      createdAt: '2025-07-07',
      modifier: '일반관리자',
      modifiedAt: '2025-07-07',
    },
    {
      no: 19,
      title: '일반 공지사항 19번입니다.',
      views: 140,
      author: '일반관리자',
      createdAt: '2025-07-06',
      modifier: '일반관리자',
      modifiedAt: '2025-07-06',
    },
    {
      no: 20,
      title: '일반 공지사항 20번입니다.',
      views: 150,
      author: '일반관리자',
      createdAt: '2025-07-05',
      modifier: '일반관리자',
      modifiedAt: '2025-07-05',
    },
  ];

  const emptyGeneralNoticeData: any[] = [];

  

  const tableHeaders = [
    { text: 'NO', value: 'no' },
    { text: '제목', value: 'title' },
    { text: '조회', value: 'views' },
    { text: '작성자', value: 'author' },
    { text: '작성일', value: 'createdAt' },
    { text: '수정자', value: 'modifier' },
    { text: '수정일', value: 'modifiedAt' },
  ];

  return (
    <div style={{ paddingTop: '40px' }}>
      <Container title="공지사항 (정상 특별 공지)">
        <Wrapper subTitle="특별공지">
          {specialNoticeData.length > 0 ? (
            <List headers={tableHeaders} listItems={specialNoticeData} />
          ) : (
            <EmptyContent
              imageSrc={DS_Store}
              message="특별공지사항이 등록되지 않았습니다."
            />
          )}
        </Wrapper>
      </Container>

      {/* <div className={styles.sectionDivider}></div> */}

      <Container title="">
        <Wrapper
          subTitle="일반공지"
          rightContent={
            <div className={styles.searchFilterArea}>
              <div className={styles.selectWrapper}>
                <SelectBox
                  title="검색 기준"
                  placeholder="제목"
                  options={['제목', '작성자']}
                />
              </div>
              <div style={{ width: '350px' }}>
                <Input type="search" placeholder="검색어를 입력하세요" />
              </div>
              <Button name="조회" size="large" />
            </div>
          }
        >
          {generalNoticeData.length > 0 ? (
            <List headers={tableHeaders} listItems={generalNoticeData} actionButton={<Button name="등록" onClick={() => navigate('/notice/enroll')} size="medium" />} />
          ) : (
            <EmptyContent
              imageSrc={DS_Store}
              message="일반공지사항이 등록되지 않았습니다."
            />
          )}
        </Wrapper>
      </Container>

      {/* <div className={styles.sectionDivider}></div> */}

      <Container title="공지사항 (빈 공지)">
        <Wrapper subTitle="특별공지">
          <EmptyContent
            imageSrc={DS_Store}
            message="특별공지사항이 등록되지 않았습니다."
          />
        </Wrapper>
      </Container>

      {/* <div className={styles.sectionDivider}></div> */}

      <Container title="">
        <Wrapper
          subTitle="일반공지"
          rightContent={
            <div className={styles.searchFilterArea}>
              <div className={styles.selectWrapper}>
                <SelectBox
                  title="검색 기준"
                  placeholder="제목"
                  options={['제목', '작성자']}
                />
              </div>
              <div style={{ width: '350px' }}>
                <Input type="search" placeholder="검색어를 입력하세요" />
              </div>
              <Button name="조회" size="large" />
            </div>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <EmptyContent
              imageSrc={DS_Store}
              message="조회결과가 없습니다."
            />
            <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
              <Button name="등록" onClick={() => navigate('/notice/enroll')} size="medium" />
            </div>
          </div>
        </Wrapper>
      </Container>
    </div>
  );
};

export default NoticeList;
