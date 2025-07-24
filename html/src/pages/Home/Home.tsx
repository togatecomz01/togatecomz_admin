import /* React, */ { useState } from 'react';
/* import { usePopup } from '../../contexts/PopupContext'; */
import ModifyPopup from '../../components/layout/Popup/ModifyPopup';
import RegisterPopup from '../../components/layout/Popup/RegisterPopup';
import PopupException from '../../components/layout/Popup/PopupException';

const Home = () => {
  /* const { openPopup } = usePopup(); */
  const [isModifyPopupOpen, setIsModifyPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isPopupExceptionOpen, setIsPopupExceptionOpen] = useState(false);

  const handleOpenEditPopup = () => {
    setIsModifyPopupOpen(true);
  };

  const handleCloseEditPopup = () => {
    setIsModifyPopupOpen(false);
  };

  const handleOpenRegisterPopup = () => {
    setIsRegisterPopupOpen(true);
  };

  const handleCloseRegisterPopup = () => {
    setIsRegisterPopupOpen(false);
  };

  const handleOpenExceptionPopup = () => {
    setIsPopupExceptionOpen(true);
  };

  const handleCloseExceptionPopup = () => {
    setIsPopupExceptionOpen(false);
  };



  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleOpenEditPopup}>팝업 열기 (수정)</button><br />
      <button onClick={handleOpenRegisterPopup}>팝업 열기 (등록)</button><br />
      <button onClick={handleOpenExceptionPopup}>팝업 예외</button><br />

      <ModifyPopup isOpen={isModifyPopupOpen} onClose={handleCloseEditPopup} /> {/* 이것들은 closebutton때문에 잠깐 */}
      <RegisterPopup isOpen={isRegisterPopupOpen} onClose={handleCloseRegisterPopup} /> 
      <PopupException isOpen={isPopupExceptionOpen} onClose={handleCloseExceptionPopup} /> 
    </div>
  );
};

export default Home;
