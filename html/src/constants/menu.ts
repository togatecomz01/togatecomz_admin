const MENU = [
  {
    name: '관리',
    children: [
      { name: '관리자', class: 'admin', path: 'admin' },
      { name: '이력관리', class: 'policy' },
      { name: '접속통계', class: 'stats' },
    ],
  },
  {
    name: '등록/삭제',
    children: [
      { name: '공지사항', class: 'notice', path: 'notice' },
      { name: '답변형게시판', class: 'answer-board' },
      { name: '이벤트', class: 'event' },
      { name: '자료실', class: 'resources' },
      { name: 'FAQ', class: 'faq' },
    ],
  },
];

export default MENU;
