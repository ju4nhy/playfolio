export const currentYear = new Date().getFullYear()

export const releaseYearList = Array.from({ length: currentYear - 1970 + 1 }, (_, index) => 1970 + index);

export const clearMessageAfterTimeout = (setMessage) => setTimeout(() => setMessage(''), 3000);

export const chunkArray = (array, chunkSize) => {
  return Array.from({ length: Math.ceil(array.length / chunkSize) }, (_, index) =>
    array.slice(index * chunkSize, (index + 1) * chunkSize)
  );
}

export const searchGames = (event, list, setSearchWord, setGameList) => {
  const value = event.target.value
  setSearchWord(value);
  const filteredGames = list.filter(game => game.name.toLowerCase().includes(value.toLowerCase()));
  value === '' && value.length == 0 
    ? setGameList(list) 
    : setGameList(filteredGames)
}

export const getRatingColor = (rating) => {
  const numericRating = parseFloat(rating);
  if (numericRating >= 90) {
    return '#00C11B'
  } else if (numericRating >= 80) {
    return '#87C08F';
  } else if (numericRating >= 60) {
    return '#EBAF0D';
  } else if (numericRating >= 40) {
    return '#DE201A';
  } else {
    return '#FFF';
  }
};

export const openEditor = (game, uiState, setUiState, setInitialValues, handleFormOpen) => {
  if (!uiState.editMode) return
  const initialValues = {
    id: game.id,
    name: game.name,
    releaseYear: game.releaseYear,
    platform: game.platform,
    developers: game.developers,
    publisher: game.publisher,
    mode: game.mode,
    genres: game.genres,
    rating: game.rating || '',
    favorite: game.favorite
  }
  setInitialValues(initialValues);
  handleFormOpen(setUiState);
}

export const addNotification = (mode, setMessage, values) => {
  if (mode === 'error') setMessage('An error occurred. Check the console.');

  if (mode === 'add' && values) setMessage(`Added new game ${values.name}`);
  if (mode === 'addError') setMessage('An error occurred. Game is not added.');
  if (mode === 'update' && values) setMessage(`Updated game ${values.name}`);
  if (mode === 'updateError') setMessage('An error occurred. Game is not updated.');
  if (mode === 'delete') setMessage(`Game deleted and moved to trash`);
  if (mode === 'deleteError') setMessage('An error occurred. Game is not deleted.');
  if (mode === 'edit') setMessage('Please select the game you wish to modify.');
  if (mode === 'disabled') setMessage('To add a new game, exit Edit mode first.');
  if (mode === 'deleteTrash') setMessage('Game has been permanently deleted.');
  if (mode === 'deleteTrash' && !setMessage) return
  if (mode === 'restore') setMessage('Game restored.');


  if (mode === 'restoreAll') setMessage('All games restored.');

  clearMessageAfterTimeout(setMessage);
}