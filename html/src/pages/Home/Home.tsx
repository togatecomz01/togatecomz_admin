import { usePopup } from '../../contexts/PopupContext';

const Home = () => {
  const { openPopup } = usePopup();

  const handleOpenPopup = () => {
    openPopup({ message: '아이디 혹은 비밀번호가 일치하지 않습니다. <br /> 확인 후 다시 이용해 주세요.', button: '확인' });
  };

  return (
    <div>
      <h1>Home</h1>

      <button onClick={handleOpenPopup}>팝업 열기</button>
    </div>
  );
};

export default Home;
