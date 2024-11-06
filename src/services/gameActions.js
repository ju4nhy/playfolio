import gameService from './gameService';
import { addNotification } from '../utils/utils';
import { handleDelete } from '../utils/stateHandlers';
import { updateRecycleBin, moveToTrash } from './trashActions';

export const updateGameList = async (setGameList, setList) => {
  try {
    await gameService
      .getAll()
      .then(games => {
        setGameList(games)
        setList(games)
        })

  } catch (error) {
    console.error(error);

  }
}

export const addGame = async (values, setGameList, setList, setMessage, isRestored = false) => {
  try {
    await gameService.create(values)
    updateGameList(setGameList, setList)

    if (isRestored) {
      addNotification('restore', setMessage);
    } else {
      addNotification('add', setMessage, values);
    }
  } catch (error) {
    console.error(error);
    addNotification('addError', setMessage)
  }
}

export const editGame = async (values, setGameList, setList, setMessage) => {
  const id = values.id
  try {
    await gameService.update(id, values)
    updateGameList(setGameList, setList)
    addNotification('update', setMessage, values)
  } catch (error) {
    console.error(error);
    addNotification('updateError', setMessage)
  }
}

export const deleteGame = async (id, gameList, setGameList, setList, setUiState, setMessage, setRecycleBin) => {
  const gameToDelete = gameList.find((game) => game.id === id);
  try {
    moveToTrash(gameToDelete, setRecycleBin, setGameList, setList, setMessage)
    await gameService.forcedelete(id)
    updateGameList(setGameList, setList);
    updateRecycleBin(setRecycleBin, setMessage);
    handleDelete(setUiState);
    addNotification('delete', setMessage)
  } catch (error) {
    console.error(error);
    addNotification('deleteError', setMessage)
  }
}

export const addFavorite = async (game, setGameList, setList) => {
  const id = game.id
  game.favorite = !game.favorite

  try {
    await gameService.update(id, game)
    updateGameList(setGameList, setList)
  } catch (error) {
    console.error(error);
  }
}