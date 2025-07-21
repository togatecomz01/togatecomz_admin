import React from 'react';
import styles from './notice.module.scss';
import List from '../../components/layout/List/List';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const Notice = () => {
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
    <div className={styles.noticeContainer}>
      <h1 className={styles.mainTitle}>공지사항</h1>

      <h2 className={styles.subTitle}>특별공지</h2>
      <List headers={tableHeaders} listItems={specialNoticeData} />

      <div className={styles.sectionDivider}></div> {/* 다시 추가 */}

      <div className={styles.generalNoticeHeader}>
        <h2 className={styles.subTitle}>일반공지</h2>
        <div className={styles.searchFilterArea}>
          {/* Select Input Placeholder */}
          <div className={styles.selectWrapper}>
            <Input type="text" placeholder="카테고리 선택 (Select 컴포넌트 필요)" className={styles.selectInputPlaceholder} />
          </div>

          {/* Search Input */}
          <Input type="search" placeholder="검색어를 입력하세요" />

          {/* Search Button */}
          <Button name="조회" />
        </div>
      </div>
      <List headers={tableHeaders} listItems={generalNoticeData} />
    </div>
  );
};

export default Notice;
