/* import React from 'react'; */
import styles from './Divide.module.scss';
import List from '../../components/layout/List/List';
import SelectBox from '../../components/SelectBox/SelectBox';
import Button from '../../components/Button/Button';
import Container from '../../components/layout/Container/Container';
import EmptyContent from '../../components/EmptyContent/EmptyContent';
import Input from '../../components/Input/Input';
import DS_Store from '../../assets/images/DS_Store.png';
import PaginationButton from '../../components/layout/List/PaginationButton/PaginationButton';
import ButtonContainer from '../../components/Button/ButtonContainer/ButtonContainer';

const Divide = () => {
  const generalNoticeData = [
    {
      category: '',
      value: '',
      author: '관리자',
      createdAt: '2025-07-22',
      modifier: '관리자',
      modifiedAt: '2025-07-22',
    },
    {
      category: '',
      value: '',
      author: '관리자',
      createdAt: '2025-07-21',
      modifier: '관리자',
      modifiedAt: '2025-07-21',
    },
    {
      category: '',
      value: '',
      author: '관리자',
      createdAt: '2025-07-20',
      modifier: '관리자',
      modifiedAt: '2025-07-20',
    },
    {
      category: '',
      value: '',
      author: '관리자',
      createdAt: '2025-07-19',
      modifier: '관리자',
      modifiedAt: '2025-07-19',
    },
    {
      category: '',
      value: '',
      author: '관리자',
      createdAt: '2025-07-18',
      modifier: '관리자',
      modifiedAt: '2025-07-18',
    },
    {
      category: '',
      value: '',
      author: '관리자',
      createdAt: '2025-07-17',
      modifier: '관리자',
      modifiedAt: '2025-07-17',
    },
    {
      category: '',
      value: '',
      author: '관리자',
      createdAt: '2025-07-16',
      modifier: '관리자',
      modifiedAt: '2025-07-16',
    },
    {
      category: '',
      value: '',
      author: '관리자',
      createdAt: '2025-07-15',
      modifier: '관리자',
      modifiedAt: '2025-07-15',
    },
    {
      category: '',
      value: '',
      author: '관리자',
      createdAt: '2025-07-14',
      modifier: '관리자',
      modifiedAt: '2025-07-14',
    },
    {
      category: '',
      value: '',
      author: '관리자',
      createdAt: '2025-07-13',
      modifier: '관리자',
      modifiedAt: '2025-07-13',
    },
    {
      category: '',
      value: '',
      author: '관리자',
      createdAt: '2025-07-12',
      modifier: '관리자',
      modifiedAt: '2025-07-12',
    },
    {
      category: '',
      value: '',
      author: '관리자',
      createdAt: '2025-07-11',
      modifier: '관리자',
      modifiedAt: '2025-07-11',
    },
  ];

  const tableHeaders = [
    { text: '구분', value: 'category', width: '15%' },
    { text: '구분값', value: 'value', width: '25%' },
    { text: '등록자', value: 'author', width: '15%' },
    { text: '등록일', value: 'createdAt', width: '15%' },
    { text: '수정자', value: 'modifier', width: '15%' },
    { text: '수정일', value: 'modifiedAt', width: '15%' },
  ];

  return (
    <Container title="구분값 등록">
      <div className={styles.searchFilterArea}>
        {/* 20250723 컨테이너 컴포넌트를 만들까 싶었는데 .. */}
        <div className={styles.selectWrapper}>
          <SelectBox title="구분값 선택" placeholder="구분" options={['구분', '구분값']} />
        </div>
        <Input type="search" placeholder="검색어를 입력하세요" />
        <Button name="조회" />
      </div>

      {generalNoticeData.length > 0 ? <List headers={tableHeaders} listItems={generalNoticeData} /> : <EmptyContent imageSrc={DS_Store} message="일반공지사항이 등록되지 않았습니다." />}
      {/* 페이지네이션 및 버튼 영역 */}
      <ButtonContainer>
        <PaginationButton />
        <Button name="등록" />
      </ButtonContainer>
    </Container>
  );
};

export default Divide;
