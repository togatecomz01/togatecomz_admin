const MENU = [
  {
    name: '관리',
    children: [
      { name: '관리자', path: 'admin' },
      { name: '이력관리', path: 'policy' },
      { name: '접속통계', path: 'stats' },
    ],
  },
  {
    name: '등록/삭제',
    children: [
      { name: '공지사항', path: 'notice' },
      { name: '답변형게시판', path: 'answer-board' },
      { name: '이벤트', path: 'event' },
      { name: '자료실', path: 'resources' },
      { name: 'FAQ', path: 'faq' },
    ],
  },
];

export default MENU;
