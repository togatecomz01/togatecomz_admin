// 리스트
export const ADMIN_HEADERS = [
  { text: '성명', value: 'name', width: 'lg' },
  { text: '부서', value: 'department', width: 'xs' },
  { text: '구분', value: 'role', width: 'md' },
  { text: '직책', value: 'position', width: 'sm' },
  { text: '연락처', value: 'contact', width: 'xl' },
  { text: '이메일', value: 'email', width: 'auto' },
];

export const ADMIN_LIST_ITEMS_MAIN = [
  {
    name: '김메인',
    department: '전산팀',
    role: '메인관리자',
    position: '대리',
    contact: '+82 10-0000-0000',
    email: 'abc@gmail.com',
  },
];

export const ADMIN_LIST_ITEMS = [
  {
    name: '김메인',
    department: '전산팀',
    role: '메인관리자',
    position: '대리',
    contact: '+82 10-0000-0000',
    email: 'abc@gmail.com',
  },
  {
    name: '김메인',
    department: '전산팀',
    role: '메인관리자',
    position: '대리',
    contact: '+82 10-0000-0000',
    email: 'abc@gmail.com',
  },
  {
    name: '김메인',
    department: '전산팀',
    role: '메인관리자',
    position: '대리',
    contact: '+82 10-0000-0000',
    email: 'abc@gmail.com',
  },
  {
    name: '김메인',
    department: '전산팀',
    role: '메인관리자',
    position: '대리',
    contact: '+82 10-0000-0000',
    email: 'abc@gmail.com',
  },
  {
    name: '김메인',
    department: '전산팀',
    role: '메인관리자',
    position: '대리',
    contact: '+82 10-0000-0000',
    email: 'abc@gmail.com',
  },
];

// 폼
type InputConfig = {
  type: string;
  placeholder?: string;
  withButton?: string; // optional
};
type FieldConfig = {
  label: string;
  subText?: string;
  required?: boolean;
  inputs?: InputConfig[];
  selects?: {
    placeholder: string;
    options: string[];
  }[];
};

export const BASIC_FIELDS: FieldConfig[] = [
  { label: '성명', subText: '관리자 등록을 위해 필요한 정보를 입력해 주세요.', required: true, inputs: [{ type: 'text', placeholder: '성명을 입력해 주세요.' }] },
  { label: '아이디', subText: '사용하실 아이디를 입력해 주세요.', required: true, inputs: [{ type: 'text', placeholder: '아이디를 입력해 주세요.', withButton: 'ID 중복확인' }] },
  {
    label: '비밀번호',
    subText: '비밀번호는 영문, 숫자 포함 8자리 이상 입력해야 합니다.',
    required: true,
    inputs: [
      { type: 'password', placeholder: '비밀번호를 입력해 주세요.' },
      { type: 'password', placeholder: '비밀번호를 다시 입력해 주세요.' },
    ],
  },
  {
    label: '부서/직책 선택',
    subText: '부서와 직책을 선택해 주세요.',
    required: true,
    selects: [
      { placeholder: '부서를 선택해 주세요', options: ['부서1', '부서2', '부서3'] },
      { placeholder: '직책을 선택해 주세요', options: ['직책1', '직책2', '직책3'] },
    ],
  },
  {
    label: '주소입력',
    subText: '기본주소와 상세주소를 입력해 주세요.',
    inputs: [
      { type: 'text', placeholder: '기본주소를 입력해 주세요' },
      { type: 'text', placeholder: '상세 주소를 입력해 주세요' },
    ],
  },
  { label: '전화번호', subText: '전화번호를 입력해 주세요.', inputs: [{ type: 'number', placeholder: '전화번호를 입력해 주세요' }] },
  { label: '휴대폰번호', subText: '휴대폰번호를 입력해 주세요.', inputs: [{ type: 'number', placeholder: '휴대폰번호를 입력해 주세요' }] },
  { label: '이메일', subText: '사용하시는 이메일을 입력해 주세요.', inputs: [{ type: 'email', placeholder: '이메일을 입력해 주세요' }] },
  { label: '사원번호', subText: '사원번호를 입력해 주세요.', inputs: [{ type: 'number', placeholder: '사원번호를 입력해 주세요' }] },
  { label: '첨부파일', subText: '썸네일 이미지를 첨부해 주세요. ex) 증명사진', inputs: [{ type: 'file' }] },
];

export const MODIFY_FIELDS: FieldConfig[] = [
  { label: '성명', subText: '관리자 등록을 위해 필요한 정보를 입력해 주세요.', required: true, inputs: [{ type: 'text', placeholder: '성명을 입력해 주세요.' }] },
  {
    label: '비밀번호',
    subText: '비밀번호를 변경 하시려면, 신규비밀번호 및 신규비밀번호 확인에 새롭게 사용할 비밀번호를 입력해 주세요.',
    required: true,
    inputs: [
      { type: 'password', placeholder: '비밀번호를 입력해 주세요.' },
      { type: 'password', placeholder: '비밀번호를 다시 입력해 주세요.' },
    ],
  },
  {
    label: '부서/직책 선택',
    subText: '부서와 직책을 선택해 주세요.',
    required: true,
    selects: [
      { placeholder: '부서를 선택해 주세요', options: ['부서1', '부서2', '부서3'] },
      { placeholder: '직책을 선택해 주세요', options: ['직책1', '직책2', '직책3'] },
    ],
  },
  {
    label: '주소입력',
    subText: '기본주소와 상세주소를 입력해 주세요.',
    inputs: [
      { type: 'text', placeholder: '기본주소를 입력해 주세요' },
      { type: 'text', placeholder: '상세 주소를 입력해 주세요' },
    ],
  },
  { label: '전화번호', subText: '전화번호를 입력해 주세요.', inputs: [{ type: 'number', placeholder: '전화번호를 입력해 주세요' }] },
  { label: '휴대폰번호', subText: '휴대폰번호를 입력해 주세요.', inputs: [{ type: 'number', placeholder: '휴대폰번호를 입력해 주세요' }] },
  { label: '이메일', subText: '사용하시는 이메일을 입력해 주세요.', inputs: [{ type: 'email', placeholder: '이메일을 입력해 주세요' }] },
  { label: '사원번호', subText: '사원번호를 입력해 주세요.', inputs: [{ type: 'number', placeholder: '사원번호를 입력해 주세요' }] },
  { label: '첨부파일', subText: '썸네일 이미지를 첨부해 주세요. ex) 증명사진', inputs: [{ type: 'file' }] },
];
