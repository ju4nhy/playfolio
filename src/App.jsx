import React, { useState, useEffect } from 'react';
import { ArrowLeftSquareFill, LayoutSidebarInset } from 'react-bootstrap-icons';
import { usePDF } from 'react-to-pdf';
import Header from './components/Header';
import GameList from './components/GameList';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import AppInfo from './components/AppInfo';
import FormModal from './components/FormModal';
import RecycleBin from './components/RecycleBin';
import { updateGameList } from './services/gameActions';
import { updateRecycleBin } from './services/trashActions';
import { handleSidebar } from './utils/stateHandlers';

function App() {
  const [gameList, setGameList] = useState([]);
  const [list, setList] = useState([]);
  const [recycleBin, setRecycleBin] = useState([]);
  const [formInitialValues, setFormInitialValues] = useState({});
  const [searchWord, setSearchWord] = useState('');
  const [message, setMessage] = useState('');
  const [uiState, setUiState] = useState({
    editMode: false,
    isSidebarOpen: false,
    isDarkMode: true,
    isActive: [false, false, false],
    showAppInfo: false,
    showRecycleBin: false,
    showForm: false,
    showDelete: false,
  });

  const { toPDF, targetRef } = usePDF({filename: 'gamelist.pdf'});

  useEffect(() => {
    updateGameList(setGameList, setList)
  }, [])

  useEffect(() => {
    updateRecycleBin(setRecycleBin, setMessage)
  }, [uiState.showRecycleBin])

  useEffect(() => {
    if (gameList && message.includes('Added new game')) {
      const element = document.getElementById('gameListTable');
      element.scrollIntoView({ block: 'end', behavior: 'smooth' });
    }
  }, [gameList, message])

  return (
    <div className="h-screen flex">
      <div className={`flex flex-1 ${uiState.isDarkMode ? 'bg-black' : 'bg-white-800'}`}>
        {!uiState.isSidebarOpen && (
          <div className={`w-20 block ${uiState.isDarkMode ? 'bg-black' : 'bg-white'}`} onMouseEnter={() => handleSidebar(setUiState)}>
            <LayoutSidebarInset className="ml-2 pl-4 mt-20" color="royalblue" size={50} />
            <ArrowLeftSquareFill className="ml-2 pl-4 mt-2" color="royalblue" size={50} />
          </div>
        )}
        {uiState.isSidebarOpen && (
          <div className={`w-10 ${uiState.isDarkMode ? 'bg-black' : 'bg-white'}`} onMouseLeave={() => handleSidebar(setUiState)} >
            <Sidebar 
              uiState={uiState} 
              setUiState={setUiState} 
              setMessage={setMessage} 
              toPDF={toPDF} 
            />
          </div> 
        )}
        <div className={`flex-1 transition-all duration-300 overflow-auto ${uiState.isDarkMode ? 'bg-gray-900' : 'bg-blue-100'} ${uiState.isSidebarOpen ? 'ml-10' : 'ml-0'}`}>
          <Header
            uiState={uiState}
            setUiState={setUiState}
            list={list}
            gameList={list}
            setGameList={setGameList}
            searchWord={searchWord}
            setSearchWord={setSearchWord}
          />
          <GameList 
            uiState={uiState}
            setUiState={setUiState}
            gameList={gameList} 
            setGameList={setGameList}
            setList={setList}
            setRecycleBin={setRecycleBin}
            setMessage={setMessage}
            searchWord={searchWord}
            targetRef={targetRef}
            setFormInitialValues={setFormInitialValues}
          />
          <Footer uiState={uiState} message={message} />
          <AppInfo uiState={uiState} setUiState={setUiState} />
          <FormModal
            uiState={uiState}
            setUiState={setUiState}
            setGameList={setGameList}
            setList={setList}
            formInitialValues={formInitialValues}
            setMessage={setMessage}
          />
          <RecycleBin 
            uiState={uiState} 
            setUiState={setUiState} 
            recycleBin={recycleBin} 
            setRecycleBin={setRecycleBin}
            gameList={gameList}
            setGameList={setGameList}
            setList={setList}
            setMessage={setMessage}
          />
        </div>
      </div>
    </div>
  );
}

export default App;