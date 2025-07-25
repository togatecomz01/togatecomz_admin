/* import React from 'react'; */
import styles from './Divide.module.scss';
import List from '../../components/layout/List/List';
import SelectBox from '../../components/SelectBox/SelectBox';
import Button from '../../components/Button/Button';
import Container from '../../components/layout/Container/Container';
import EmptyContent from '../../components/EmptyContent/EmptyContent';
import Input from '../../components/Input/Input';
import PaginationButton from '../../components/layout/PaginationButton/PaginationButton';
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
    { text: '구분', value: 'category', width: 'lsm' },
    { text: '구분값', value: 'value', width: 'lxl' },
    { text: '등록자', value: 'author', width: 'mxs' },
    { text: '등록일', value: 'createdAt', width: 'lg' },
    { text: '수정자', value: 'modifier', width: 'msm' },
    { text: '수정일', value: 'modifiedAt', width: 'lg' },
  ];
  // 데이터 유무 여부
  const isDataExist = false;

  return (
    <Container title="구분값등록">
      <div className={styles.searchFilterArea}>
        <div className={styles.selectWrapper}>
          <SelectBox title="구분값 선택" placeholder="구분" options={['구분', '구분값']} size="sm" />
        </div>
        <Input type="search" placeholder="검색어 입력" />
        <Button name="조회" />
      </div>
      {isDataExist ? (
        <>
          <List headers={tableHeaders} listItems={generalNoticeData} />
          <ButtonContainer>
            <PaginationButton />
            <Button name="등록" />
          </ButtonContainer>
        </>
      ) : (
        <>
          <EmptyContent message="조회 결과가 없습니다." />
          <ButtonContainer>
            <Button name="등록" />
          </ButtonContainer>
        </>
      )}
    </Container>
  );
};

export default Divide;
