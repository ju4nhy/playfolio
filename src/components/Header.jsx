import { Button } from 'react-bootstrap';
import { PencilSquare, StarFill, Controller, TrophyFill } from 'react-bootstrap-icons';
import { viewAllGames, viewFavorites, viewTop10, switchEditMode, toggleButtonActive  } from '../utils/stateHandlers';
import { searchGames } from '../utils/utils';

const Header = ({ 
  uiState, 
  setUiState,
  list,
  gameList,
  setGameList, 
  searchWord, 
  setSearchWord
}) => {
  return (
    <>
      <div className={`flex p-4 pb-0 ${uiState.isDarkMode ? 'bg-gray-900'  : 'bg-blue-100'}`}>
        <h1 className={`
          text-4xl font-display font-bold} hover:scale-105 mt-2 
          ${uiState.isDarkMode ? 'text-white' : 'text-black'} 
          ${uiState.editMode ? 'opacity-30' : 'opacity-100'}
        `}>
          MyPlayfolio
        </h1>
        <input 
          name="Searchbar" 
          className={`
            w-1/5 rounded-md p-2 ml-20 text-lg border-4 
            ${uiState.editMode ? 'opacity-30' : 'opacity-100'} 
            ${uiState.isDarkMode ? 'border-gray-600' : 'border-gray-400'}
          `}
          value={searchWord}
          placeholder="Search by name" 
          onChange={(event) => searchGames(event, list, setSearchWord, setGameList)}
        />

        <Button 
          variant="dark" 
          className="w-40 mr-5 ml-10 font-bold" 
          active={uiState.isActive[0]}
          onClick={() => { 
            viewAllGames(gameList, setGameList, setSearchWord); 
            toggleButtonActive(0, uiState, setUiState) 
          }} 
        > 
          <Controller className="inline" title="All games" color="royalblue" size={30} /> 
          <label className="text-xl inline ml-3">All games</label>
        </Button>
        <Button 
          variant="dark" 
          className="w-40 flex items-center mr-5 font-bold" 
          active={uiState.isActive[1]}
          onClick={() => { 
            viewFavorites(gameList, setGameList); 
            toggleButtonActive(1, uiState, setUiState)
          }} 
        >
          <StarFill className="inline" title="Favorites" color="royalblue" size={25} />
          <label className="text-xl inline ml-3">Favorites</label>
        </Button>
        <Button 
          variant="dark" 
          className="w-40 flex items-center mr-5 font-bold" 
          active={uiState.isActive[2]}
          onClick={() => { 
            viewTop10(list, setGameList); 
            toggleButtonActive(2, uiState, setUiState)
          }} 
        >
          <TrophyFill className="inline" title="Top 10" color="royalblue" size={25} />
          <label className="text-xl inline ml-3">Top 10</label>
        </Button>

        {uiState.editMode ? 
          <div 
            className="flex ml-2 pt-2 pl-2 pr-3 text-white bg-blue-950 border-solid border-2 border-blue-900 rounded-md" 
            onClick={() => switchEditMode(uiState, setUiState)}
          >
            <PencilSquare className="mt-1" title="EDIT MODE" color="royalblue" size={30} /> 
            <h4 className="ml-2 mt-1">Edit Mode</h4>
          </div> 
        : null}
      </div>
      <div className="flex -mt-4 mr-6 flex-grow justify-end">
        <p className={`text-md ${uiState.isDarkMode ? 'text-white' : 'text-black'}`}>Total games of {gameList.length}</p>
      </div>
    </>
  );
};

export default Header