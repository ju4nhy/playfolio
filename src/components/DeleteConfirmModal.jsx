import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteGame } from '../services/gameActions';
import { handleDelete } from '../utils/stateHandlers';

const DeleteConfirmModal = ({ 
  gameId, 
  gameList,
  setGameList, 
  setList, 
  setMessage, 
  uiState, 
  setUiState, 
  showDelete, 
  setRecycleBin
}) => {
  return (
      <Modal show={showDelete} onHide={() => handleDelete(setUiState)}>
        <Modal.Header data-bs-theme="dark" className={`${uiState.DarkMode ? 'bg-gray-900 text-white'  : 'bg-gray-700 text-white'}`} closeButton >
          <p className="text-lg font-bold">Confirmation</p>
        </Modal.Header>
        <Modal.Body className={`${uiState.isDarkMode ? 'bg-gray-800 text-white'  : 'bg-white text-black'}`}>
            <p className="text-md">Are you sure you want to delete this game? </p>
            <Button variant="danger" className="mr-2" onClick={() => deleteGame(gameId, gameList, setGameList, setList, setUiState, setMessage, setRecycleBin)}>Yes, delete</Button>
            <Button variant="secondary" onClick={() => handleDelete(setUiState)}>No, keep it</Button>
        </Modal.Body>
      </Modal>
  );
}

export default DeleteConfirmModal