/* import React from 'react'; */
import { useEffect } from 'react';
import styles from './Home.module.scss';

const Home = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#f4f5fa';

    //Home 컴포넌트가 사라질 때: 배경색 원래대로 복원
    return () => {
      document.body.style.backgroundColor = '#fff';
    };
  }, []);

  return (
    <main className={styles.homeContainer}>
      {/* Statistics Section) */}
      <section className={styles.statisticsSection}>
        <div className={`${styles.statCard} ${styles.blue}`}>
          <div className={styles.textContent}>
            <h3>올해 접속자 수</h3>
            <p className={styles.statValue}>
              500회
              <span className={styles.statChange}>▲ 2.3%</span>
            </p>
          </div>
          <button type="button">자세히보기</button>
    
        </div>
        <div className={`${styles.statCard} ${styles.cyan}`}>
          <div className={styles.textContent}>
            <h3>이번달 접속자 수</h3> {/* 여기도 h2로 둘지? */}
            <p className={styles.statValue}>
              043회
              <span className={styles.statChange}>▲ 2.3%</span>
            </p>
          </div>
          <button type="button">자세히보기</button>
        </div>
        <div className={`${styles.statCard} ${styles.green}`}>
          <div className={styles.textContent}>
            <h3>오늘 접속자 수</h3>
            <p className={styles.statValue}>
              001회
              <span className={styles.statChange}>▲ 2.3%</span>
            </p>
          </div>
          <button type="button">자세히보기</button>
        </div>
      </section>

      {/* Notice Section */}
      <section className={styles.noticeSection}>
        <div className={`${styles.noticeBox} ${styles.specialNotices}`}>
          <h2>특별 공지사항</h2>
          <ul>
            <li>
              <div className={styles.dateBadge}>
                <span className={styles.day}>10</span>
                <span className={styles.month}>2023.05</span>
              </div>
              <div className={styles.noticeContent}>
                <p className={styles.title}>[전사 공지] 연말 프로젝트 일정 조율</p>
                <p className={styles.description}>현재 진행 중인 모든 프로젝트의 마감일과 리뷰 일정을 재조정하였습니다. 각 팀은 일정표를 확인 바랍니다.</p>
              </div>
            </li>
            <li>
              <div className={styles.dateBadge}>
                <span className={styles.day}>10</span>
                <span className={styles.month}>2023.05</span>
              </div>
              <div className={styles.noticeContent}>
                <p className={styles.title}>[HR] 12월 워크숍 일정 안내</p>
                <p className={styles.description}>전 직원 대상 워크숍이 12월 20일 진행됩니다. 일정표와 준비 사항은 별도 공지 예정입니다.</p>
              </div>
            </li>
            <li>
              <div className={styles.dateBadge}>
                <span className={styles.day}>10</span>
                <span className={styles.month}>2023.05</span>
              </div>
              <div className={styles.noticeContent}>
                <p className={styles.title}>[HR] 12월 휴무 일정 안내</p>
                <p className={styles.description}>연속 폭설로 고속도로 통행에 철처 대비, 연속 폭설로 고속도로 통행에 철처 대비, 연속 폭설로 고속도로 통행에 철처 대비연속 폭설로 고속도로 통행에...</p>
              </div>
            </li>
          </ul>
        </div>
        <div className={`${styles.noticeBox} ${styles.recentNotices}`}>
          <h2>최근 공지사항</h2>
          <ul>
            <li>
              <div className={styles.dateBadge}>
                <span className={styles.day}>10</span>
                <span className={styles.month}>2023.05</span>
              </div>
              <div className={styles.noticeContent}>
                <p className={styles.title}>[개발팀] Figma 플러그인 사용 정책 변경 안내</p>
                <p className={styles.description}>프로젝트별 플러그인 사용 제한 및 권장 플러그인 리스트를 공유드립니다.</p>
              </div>
            </li>
            <li>
              <div className={styles.dateBadge}>
                <span className={styles.day}>10</span>
                <span className={styles.month}>2023.05</span>
              </div>
              <div className={styles.noticeContent}>
                <p className={styles.title}>[디자인팀] 신규 디자인 가이드라인 배포</p>
                <p className={styles.description}>UI/UX 일관성을 위해 새로운 디자인 가이드라인을 배포했습니다. 프로젝트 진행 시 반드시 참고 바랍니다.</p>
              </div>
            </li>
            <li>
              <div className={styles.dateBadge}>
                <span className={styles.day}>10</span>
                <span className={styles.month}>2023.05</span>
              </div>
              <div className={styles.noticeContent}>
                <p className={styles.title}>[PMO] 시안 검수 프로세스 개선</p>
                <p className={styles.description}>검수 절차를 간소화하고 승인 시간을 단축했습니다. 세부 내용은 내부 위키에서 확인 가능합니다.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Info Section */}
      <section className={styles.infoSection}>
        <div className={`${styles.infoBox} ${styles.listBox}`}>
          <h2>자료실</h2>
          <ul>
            <li><a href="javascript:void(0)">회사 규정집<span className={styles.arrow}>→</span></a></li>
            <li><a href="javascript:void(0)">연차 사용 가이드<span className={styles.arrow}>→</span></a></li>
            <li><a href="javascript:void(0)">근무 스케쥴표<span className={styles.arrow}>→</span></a></li>
          </ul>
        </div>

        <div className={`${styles.infoBox} ${styles.listBox}`}>
          <h2>이벤트</h2>
          <ul>
            <li><a href="javascript:void(0)">2024년 9월 특판프로모션변경... <span className={styles.arrow}>→</span></a></li>
            <li><a href="javascript:void(0)">설문 참여 이벤트 <span className={styles.arrow}>→</span></a></li>
            <li><a href="javascript:void(0)">2024년 1월 특판프로모션변경... <span className={styles.arrow}>→</span></a></li>
          </ul>
        </div>

        <div className={`${styles.infoBox} ${styles.qnaBox}`}>
          <h2>QnA</h2>
          <ul>
            <li>
              <a href="javascript:void(0)">
                <span className={`${styles.qnaStatus} ${styles.wait}`}>대기 중</span>
                <span className={`${styles.qnaText} ${styles.waitText}`}>REST API 통합에 대한 문서를 찾고 있습니다. 텍스트가 길어지면 이 부분이 잘려야 합니다.</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <span className={`${styles.qnaStatus} ${styles.complete}`}>작업 완료</span>
                <span className={styles.qnaText}>REST API 통합에 대한 문서를 찾고 있습니다.</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <span className={`${styles.qnaStatus} ${styles.complete}`}>작업 완료</span>
                <span className={styles.qnaText}>REST API 통합에 대한 문서를 찾고 있습니다.</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Home;