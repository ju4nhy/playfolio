import trashService from './trashService';
import { updateGameList, addGame } from './gameActions'; 
import { addNotification } from '../utils/utils';
import { handleDelete, confirmDelete } from '../utils/stateHandlers';

export const updateRecycleBin = async (setRecycleBin, setMessage) => {
  try {
    await trashService
    .getAllTrash()
    .then(trash => {
        setRecycleBin(trash)
      })
  } catch (error) {
    console.error(error);
  }
}

export const moveToTrash = async (game, setRecycleBin, setGameList, setList, setMessage) => {
  try {
    await trashService.createTrash(game)
    updateGameList(setGameList, setList)
    updateRecycleBin(setRecycleBin, setMessage)
  } catch (error) {
    console.error(error);
  }
}

export const restoreGame = async (game, setRecycleBin, setGameList, setList, setMessage) => {
  try {
    addGame(game, setGameList, setList, setMessage, true)
    deleteTrash(game.id, setRecycleBin)
  } catch (error) {
    console.error(error);
  }
}

export const restoreAll = async (games, setRecycleBin, setGameList, setList, setMessage) => {
  try {
    await Promise.all(games.map(async (game) => {
      restoreGame(game, setRecycleBin, setGameList, setList, setMessage);
    }));
    updateRecycleBin(setRecycleBin, setMessage);
    addNotification('restoreAll', setMessage);
  } catch (error) {
    console.error(error);
  }
}

export const deleteTrash = async (id, setRecycleBin, setMessage) => {
  try {
    await trashService.deleteTrash(id)
    updateRecycleBin(setRecycleBin, setMessage)
    addNotification('deleteTrash', setMessage)
  } catch (error) {
    console.error(error);
  }
}

export const deleteAllTrash = async (ids, setRecycleBin, setMessage) => {
  try {
    await Promise.all(ids.map(async (id) => {
      await trashService.deleteTrash(id);
    }));
    updateRecycleBin(setRecycleBin, setMessage);
    addNotification('deleteAllTrash', setMessage);
  } catch (error) {
    console.error(error);
  }
}