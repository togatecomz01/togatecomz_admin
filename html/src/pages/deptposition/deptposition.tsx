/* import React from 'react'; */
import List from '../../components/List/List';
import SelectBox from '../../components/SelectBox/SelectBox';
import Button from '../../components/Button/Button';
import ButtonContainer from '../../components/Button/ButtonContainer/ButtonContainer';
import Container from '../../components/layout/Container/Container';
import EmptyContent from '../../components/EmptyContent/EmptyContent';
import SubHeader from '../../components/layout/SubHeader/SubHeader';
import PaginationButton from '../../components/PaginationButton/PaginationButton';

const DeptPosition = () => {
  const deptPositionData = [
    {
      no: 1,
      category: '부서',
      department: '개발팀',
      position: '팀장',
      members: 5,
      createdAt: '2025-07-22',
      modifier: '관리자',
      modifiedAt: '2025-07-22',
    },
    {
      no: 2,
      category: '부서',
      department: '개발팀',
      position: '팀원',
      members: 10,
      createdAt: '2025-07-21',
      modifier: '관리자',
      modifiedAt: '2025-07-21',
    },
    {
      no: 3,
      category: '부서',
      department: '디자인팀',
      position: '팀장',
      members: 3,
      createdAt: '2025-07-20',
      modifier: '관리자',
      modifiedAt: '2025-07-20',
    },
    {
      no: 4,
      category: '부서',
      department: '디자인팀',
      position: '팀원',
      members: 7,
      createdAt: '2025-07-19',
      modifier: '관리자',
      modifiedAt: '2025-07-19',
    },
    {
      no: 5,
      category: '부서',
      department: '영업팀',
      position: '팀장',
      members: 4,
      createdAt: '2025-07-18',
      modifier: '관리자',
      modifiedAt: '2025-07-18',
    },
    {
      no: 6,
      category: '부서',
      department: '영업팀',
      position: '팀원',
      members: 8,
      createdAt: '2025-07-17',
      modifier: '관리자',
      modifiedAt: '2025-07-17',
    },
    {
      no: 7,
      category: '부서',
      department: '마케팅팀',
      position: '팀장',
      members: 2,
      createdAt: '2025-07-16',
      modifier: '관리자',
      modifiedAt: '2025-07-16',
    },
    {
      no: 8,
      category: '부서',
      department: '마케팅팀',
      position: '팀원',
      members: 6,
      createdAt: '2025-07-15',
      modifier: '관리자',
      modifiedAt: '2025-07-15',
    },
    {
      no: 9,
      category: '부서',
      department: '인사팀',
      position: '팀장',
      members: 1,
      createdAt: '2025-07-14',
      modifier: '관리자',
      modifiedAt: '2025-07-14',
    },
    {
      no: 10,
      category: '부서',
      department: '인사팀',
      position: '팀원',
      members: 3,
      createdAt: '2025-07-13',
      modifier: '관리자',
      modifiedAt: '2025-07-13',
    },
    {
      no: 11,
      category: '부서',
      department: '회계팀',
      position: '팀장',
      members: 2,
      createdAt: '2025-07-12',
      modifier: '관리자',
      modifiedAt: '2025-07-12',
    },
    {
      no: 12,
      category: '부서',
      department: '회계팀',
      position: '팀원',
      members: 4,
      createdAt: '2025-07-11',
      modifier: '관리자',
      modifiedAt: '2025-07-11',
    },
  ];

  const tableHeaders = [
    { text: '구분', value: 'category', width: 'lsm' },
    { text: '부서명', value: 'department', width: 'lxl' },
    { text: '등록자', value: 'modifier', width: 'mxs' },
    { text: '등록일', value: 'createdAt', width: 'lg' },
    { text: '수정자', value: 'modifier', width: 'msm' },
    { text: '수정일', value: 'modifiedAt', width: 'lg' },
  ];
  // 데이터 유무 여부
  const isDataExist = true;

  return (
    <Container title="부서/직책 관리">
      <SubHeader>
        <SelectBox title="카테고리" placeholder="부서" options={['부서', '직책']} size="sm" />
      </SubHeader>
      {isDataExist ? <List headers={tableHeaders} listItems={deptPositionData} /> : <EmptyContent message="등록된 [부서]나 [직책]이 없습니다" />}
      <ButtonContainer>
        {isDataExist && <PaginationButton />}
        <Button name="등록" />
      </ButtonContainer>
    </Container>
  );
};

export default DeptPosition;
