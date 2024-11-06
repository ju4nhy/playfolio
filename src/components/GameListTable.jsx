import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { Star, StarFill } from 'react-bootstrap-icons';
import { getRatingColor, openEditor } from '../utils/utils';
import { handleForm, handleDelete } from '../utils/stateHandlers';
import { sortAlphabetically, sortByReleaseYear, sortByPlatform, sortByRating } from '../utils/sortingFunctions';
import { addFavorite } from '../services/gameActions';
import { confirmDelete } from '../utils/stateHandlers';

const GameListTable = ({ 
  targetRef, 
  uiState, 
  setUiState, 
  gameList, 
  setGameList, 
  setList,
  setFormInitialValues, 
  sortDirection, 
  setSortDirection,
  setGameId
}) => {
    const AddTableHead = () => {
      return (
        <thead className="sticky -top-1">
          <tr>
            <th>#</th>
            <th className="active:bg-slate-600" onClick={() => sortAlphabetically(gameList, setGameList, sortDirection, setSortDirection)}>Game</th>
            <th className="active:bg-slate-600" onClick={() => sortByReleaseYear(gameList, setGameList, sortDirection, setSortDirection)}>Released</th>
            <th className="active:bg-slate-600" onClick={() => sortByPlatform(gameList, setGameList, sortDirection, setSortDirection)}>Platform</th>
            <th>Developer</th>
            <th>Publisher</th>
            <th>Mode</th>
            <th>Genres</th>
            <th className="active:bg-slate-600" onClick={() => sortByRating(gameList, setGameList, sortDirection, setSortDirection)}>Rating</th>
            <th>Favorites</th>
            {uiState.editMode ? <th></th> : null}
          </tr>
        </thead>
      )
    };
    
    const AddTableBody = () => {
      return (
        <tbody>
          {gameList.map((game, i) => (
            <tr key={i} onClick={() => openEditor(game, uiState, setUiState, setFormInitialValues, handleForm)}>
              <td>{i + 1}</td>
              <td>{game.name}</td>
              <td>{game.releaseYear}</td>
              <td>{game.platform}</td>
              <td>{game.developers}</td>
              <td>{game.publisher}</td>
              <td>{game.mode.join(', ')}</td>
              <td>{game.genres.join(', ')}</td>
              <td className="text-2xl text-bold text-center" style={{ color: getRatingColor(game.rating) }}>{game.rating || ''}</td>
              <td className="text-center">
                {game.favorite === false ? 
                  <Star 
                    className="inline" 
                    title="Favorites" 
                    color="royalblue" 
                    size={25} 
                    onClick={(e) => { e.stopPropagation(); addFavorite(game, setGameList, setList)}} 
                  /> 
                : <StarFill 
                    className="inline" 
                    title="Favorites" 
                    color="royalblue" 
                    size={25} 
                    onClick={(e) => { e.stopPropagation(); addFavorite(game, setGameList, setList)}}
                  />}
              </td>
              {uiState.editMode ?   
                <td>
                  <Button 
                    className="w-full bg-slate-600 border-2 text-white" 
                    size="sm" 
                    variant="secondary" 
                    onClick={(e) => { e.stopPropagation(); confirmDelete(game.id, handleDelete, setUiState, setGameId);}}
                  > 
                    Delete
                  </Button>
                </td>
              : null}
            </tr>
          ))}
        </tbody>
      )
    };
 
    return (
      <Table 
        ref={targetRef} 
        id="gameListTable"
        className="mb-0 var" 
        size="md" 
        variant={`${uiState.isDarkMode ? 'dark' : 'light'}`} 
        striped 
        bordered 
        hover 
      >
        <AddTableHead />                        
        <AddTableBody />
      </Table>
    );
  }
  
  export default GameListTable