import React from 'react';
import { Formik } from 'formik';
import Modal from 'react-bootstrap/Modal';
import GameForm from './GameForm';
import { handleForm } from '../utils/stateHandlers';
import { addGame, editGame } from '../services/gameActions';

const FormModal = ({ 
  uiState, 
  setUiState, 
  setGameList, 
  setList, 
  formInitialValues, 
  setMessage 
}) => {
    return (
      <div className={`p-3 ${uiState.isDarkMode ? 'bg-gray-900' : 'bg-blue-100'}`}>
        <Modal show={uiState.showForm} onHide={() => handleForm(setUiState)} size="xl" > 
          <Modal.Header data-bs-theme="dark" className={`max-h-12 ${uiState.isDarkMode ? 'bg-gray-900 text-white'  : 'bg-gray-700 text-white'}`} closeButton >
            <Modal.Title>{!uiState.editMode ? 'Add game' : 'Edit game'}</Modal.Title>
          </Modal.Header>
          <Modal.Body className={`${uiState.isDarkMode ? 'bg-gray-800 text-white'  : 'bg-white text-black'}`}>
            <Formik
              initialValues={
                uiState.editMode
                  ? { ...formInitialValues }
                  : {
                      name: '',
                      releaseYear: '',
                      platform: '',
                      developers: '',
                      publisher: '',
                      mode: [],
                      genres: [],
                      rating: '',
                      favorite: false
                    }
              }
              onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                !uiState.editMode 
                  ? addGame(values, setGameList, setList, setMessage) 
                  : editGame(values, setGameList, setList, setMessage)
                handleForm(setUiState);
              }}
            >
              <GameForm uiState={uiState} />
            </Formik>
          </Modal.Body>
        </Modal>
      </div>
    );
};

export default FormModal