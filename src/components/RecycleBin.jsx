import Modal from 'react-bootstrap/Modal';
import { Table, Button } from 'react-bootstrap';
import { handleRecycleBin, confirmDelete, handleDelete } from '../utils/stateHandlers';
import { restoreGame, restoreAll, deleteTrash, deleteAllTrash } from '../services/trashActions';

const RecycleBin = ({ gameList, setGameList, setList, uiState, setUiState, recycleBin, setRecycleBin, setMessage }) => {
  const games = recycleBin.map(game => game)
  const ids = recycleBin.map(game => game.id);

  return (
      <Modal size="l" show={uiState.showRecycleBin} onHide={() => handleRecycleBin(setUiState)}>
      <Modal.Header data-bs-theme="dark" className={`${uiState.isDarkMode ? 'bg-gray-900 text-white'  : 'bg-gray-700 text-white'}`} closeButton >
        <Modal.Title>Trash</Modal.Title>
      </Modal.Header>
      <Modal.Body className={`${uiState.isDarkMode ? 'bg-gray-800 text-white'  : 'bg-white text-black'}`}>
        <label className="mb-2 text-lg">{games.length} games in the trash. </label>
        <label className="mb-4">Deleting or restoring a game does not require confirmation.</label>
        <Button 
          className="w-40 text-white" 
          size="sm" 
          variant="primary" 
          onClick={() => restoreAll(games, setRecycleBin, setGameList, setList, setMessage)}
        >
          Restore all
        </Button>
        <Button 
          className="w-40 text-white ml-3" 
          size="sm" 
          variant="secondary" 
          onClick={() => deleteAllTrash(ids, setRecycleBin, setMessage)}
        >
          Delete all
        </Button>
        <Table variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th className="active:bg-slate-600" onClick={() => sortAlphabetically(gameList, setGameList, sortDirection, setSortDirection)}>Game</th>
              <th>Restore</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {recycleBin.map((game, i) => (
              <tr key={game.id}>
                <td>{i + 1}</td>
                <td>{game.name}</td>
                <td> 
                  <Button 
                    className="w-auto bg-blue-900 border-2 text-white" 
                    size="sm" 
                    variant="primary" 
                    onClick={() => restoreGame(game, setRecycleBin, setGameList, setList, setMessage )}
                  >
                    Restore
                  </Button>
                </td>
                <td>
                <Button 
                  className="w-auto border-2 text-white" 
                  size="sm" 
                  variant="secondary" 
                  onClick={() => deleteTrash(game.id, setRecycleBin, setMessage)}
                >
                  Delete
                </Button>
                </td>
              </tr>
            ))}
          </tbody>
          </Table>
          {recycleBin.length < 1 ? <p>No games in the recycle bin. </p> : null}
      </Modal.Body>
    </Modal>
  );
};

export default RecycleBin