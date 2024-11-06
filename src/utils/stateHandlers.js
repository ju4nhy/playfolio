export const viewAllGames = (gameList, setGameList, setSearchWord) => {
  setGameList(gameList) 
  setSearchWord('')
}

export const viewFavorites = (gameList, setGameList) => {
  const favorites = gameList.filter(game => game.favorite === true);
  setGameList(favorites);
}

export const viewTop10 = (list, setGameList) => {
  const gamesByRating = list.slice();
  const top10 = gamesByRating.sort((a, b) => b.rating - a.rating).slice(0, 10);
  setGameList(top10);
}

export const toggleButtonActive = (index, uiState, setUiState) => {
  const isActive = [...uiState.isActive];
  const newIsActive = new Array(isActive.length).fill(false);
  newIsActive[index] = true;
  setUiState((prevUiState) => ({ ...prevUiState, isActive: newIsActive }));
}

export const switchEditMode = (uiState, setUiState, addNotification, setMessage) => {
  setUiState((prevUiState) => ({ ...prevUiState, editMode: !prevUiState.editMode }));
  !uiState.editMode && addNotification('edit', setMessage);
}

export const confirmDelete = (id, handleDelete, setUiState, setGameId) => {
  setGameId(id);
  handleDelete(setUiState);
}

export const handleSidebar = (setUiState) => {
  setUiState((prevUiState) => ({ ...prevUiState, isSidebarOpen: !prevUiState.isSidebarOpen }));
}

export const handleAppInfo = (setUiState) => {
  setUiState((prevUiState) => ({ ...prevUiState, showAppInfo: !prevUiState.showAppInfo }));
} 

export const handleForm = (setUiState) => {
  setUiState((prevUiState) => ({ ...prevUiState, showForm: !prevUiState.showForm }));
} 

export const handleDelete = (setUiState) => {
  setUiState((prevUiState) => ({ ...prevUiState, showDelete: !prevUiState.showDelete }));
} 

export const handleRecycleBin = (setUiState) => {
  setUiState((prevUiState) => ({ ...prevUiState, showRecycleBin: !prevUiState.showRecycleBin }));
}

export const toggleDarkMode = (setUiState) => {
  setUiState((prevUiState) => ({ ...prevUiState, isDarkMode: !prevUiState.isDarkMode }));
}