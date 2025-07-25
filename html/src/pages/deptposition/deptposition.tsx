/* import React from 'react'; */
import { useNavigate } from 'react-router-dom';
import styles from './deptposition.module.scss';
import List from '../../components/layout/List/List';
import SelectBox from '../../components/SelectBox/SelectBox';
import Button from '../../components/Button/Button';
import ButtonContainer from '../../components/Button/ButtonContainer/ButtonContainer';
import Container from '../../components/layout/Container/Container';
import EmptyContent from '../../components/EmptyContent/EmptyContent';
import Wrapper from '../../components/layout/Wrapper/Wrapper';
import DS_Store from '../../assets/images/DS_Store.png';

const DeptPosition = () => {
  const navigate = useNavigate();

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
    { text: '구분', value: 'category', width: '15%' },
    { text: '부서명', value: 'department', width: '25%' },
    { text: '등록자', value: 'modifier', width: '10%' },
    { text: '등록일', value: 'createdAt' },
    { text: '수정자', value: 'modifier', width: '15%' },
    { text: '수정일', value: 'modifiedAt' },
  ];

  return (
    <Container title="부서/직책 관리">
      <div className={styles.topArea}>
        <div className={styles.searchFilterArea}>
          <div className={styles.selectWrapper}>
            <SelectBox title="카테고리" placeholder="부서" options={['부서', '직위']} />
          </div>
        </div>
      </div>

      {deptPositionData.length > 0 && <List headers={tableHeaders} listItems={deptPositionData} />}
      <Wrapper subTitle="">
        <EmptyContent imageSrc={DS_Store} message="등록된 [부서]나 [직책]이 없습니다" />
      </Wrapper>
      <ButtonContainer>
        <Button name="등록" onClick={() => navigate('/deptposition/resister')} />
      </ButtonContainer>
    </Container>
  );
};

export default DeptPosition;
