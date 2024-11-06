import Modal from 'react-bootstrap/Modal';
import { handleAppInfo } from '../utils/stateHandlers';

const AppInfo = ({ uiState, setUiState }) => {
  return (
    <div>
      <Modal show={uiState.showAppInfo} onHide={() => handleAppInfo(setUiState)}>
        <Modal.Header data-bs-theme="dark" className={`${uiState.isDarkMode ? 'bg-gray-900 text-white'  : 'bg-gray-700 text-white'}`} closeButton >
          <Modal.Title>App Info</Modal.Title>
        </Modal.Header>
        <Modal.Body className={`${uiState.isDarkMode ? 'bg-gray-800 text-white'  : 'bg-white text-black'}`}>
          <h5 className="mb-4">MyPlayfolio</h5>
          <p className="text-lg">MyPlayfolio is a simple web app for listing games on different platforms. The app currently uses React, JSON Server, Tailwind and Bootstrap.</p>
          <p className="text-lg">User is able to view, search, add, edit and delete games. User can also download the list of games in .pdf format and switch between dark and light themes.</p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AppInfo