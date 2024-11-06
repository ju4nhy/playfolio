import React, { useState } from 'react';
import DeleteConfirmModal from '../components/DeleteConfirmModal';
import GameListTable from '../components/GameListTable';

function GameList ({ 
  uiState,
  setUiState,
  gameList,
  setGameList,
  setList,
  searchWord, 
  targetRef, 
  setFormInitialValues,
  setMessage,
  setRecycleBin
}) {
  const [gameId, setGameId] = useState(null);
  const [sortDirection, setSortDirection] = useState('desc')

  return (
    <div className={`
      h-4/5 overflow-auto 
      ${uiState.editMode ? 'animate-pulse border-solid border-4' : 'animate-none border-none'} 
      ${uiState.isDarkMode ? 'border-white' : 'border-slate-600'}
    `}>
      <DeleteConfirmModal 
        gameId={gameId} 
        gameList={gameList}
        setGameList={setGameList}
        setList={setList}
        setMessage={setMessage}
        uiState={uiState} 
        setUiState={setUiState}
        showDelete={uiState.showDelete} 
        setRecycleBin={setRecycleBin}
      />
      <GameListTable 
        targetRef={targetRef}
        gameList={gameList} 
        setGameList={setGameList} 
        setList={setList}
        uiState={uiState} 
        setUiState={setUiState} 
        setFormInitialValues={setFormInitialValues} 
        sortDirection={sortDirection}
        setSortDirection={setSortDirection}
        setGameId={setGameId}
      />
      {searchWord && gameList.length === 0 && (
        <p className={`${uiState.isDarkMode ? 'text-white' : 'text-black'} ml-6 mt-3`}>
          No games found.
        </p>
      )}
    </div>
  );
};

export default GameList