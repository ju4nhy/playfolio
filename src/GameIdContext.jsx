import React, { createContext, useState, useContext } from 'react';

const GameIdContext = createContext(null);

export const GameIdProvider = ({ children }) => {
  const [gameId, setGameId] = useState(null);

  return (
    <GameIdContext.Provider value={[ gameId, setGameId] }>
      {children}
    </GameIdContext.Provider>
  );
};

export const useGameId = () => useContext(GameIdContext);