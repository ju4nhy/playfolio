import { InfoSquare, PencilSquare, PatchPlusFill, SquareHalf, Download, Trash3Fill } from 'react-bootstrap-icons';
import { switchEditMode, toggleDarkMode, handleAppInfo, handleForm, handleRecycleBin } from '../utils/stateHandlers';
import { addNotification } from '../utils/utils';

const Sidebar = ({ uiState, setUiState, setMessage, toPDF }) => {
	return (
		<div className={`w-20 h-screen fixed top-0 left-0 mt-3 transition-all duration-800 ${uiState.isDarkMode ? 'bg-slate-950' : 'bg-white'}  ${uiState.isSidebarOpen ? 'translate-x-0' : '-translate-x-64'}`}>
			<InfoSquare 
				className="m-3 hover:scale-125" 
				color="royalblue" 
				size={40} 
				title="App Info" 
				onClick={() => handleAppInfo(setUiState)}
			/>
			<p className="text-xs text-blue-500 text-center font-bold" >App Info</p>
			<PatchPlusFill 
				className="m-3 mt-5 hover:scale-125" 
				color="royalblue" 
				size={40} 
				title="Add game" 
				onClick={!uiState.editMode ? () => handleForm(setUiState) : () => addNotification('disabled', setMessage)} 
			/>
			<p className="text-xs text-blue-500 text-center font-bold" onClick={() => handleForm(setUiState)}>Add game</p>
			<PencilSquare 
				className="m-3 mt-5 hover:scale-125" 
				color="royalblue" 
				size={40} 
				title="Edit game" 
				onClick={() => switchEditMode(uiState, setUiState, addNotification, setMessage)}  
			/>
			<p className="text-xs text-blue-500 text-center font-bold" onClick={() => switchEditMode(uiState, setUiState, addNotification, setMessage)} >{!uiState.editMode ? 'Edit game' : 'Stop editing'}</p>
			<Trash3Fill
				className="m-3 mt-5 hover:scale-125" 
				color="royalblue" 
				size={40} 
				title="Trash" 
				onClick={() => handleRecycleBin(setUiState)}
			/>
			<p className="text-xs text-blue-500 text-center font-bold" >Trash</p>
			<SquareHalf 
				className="m-3 mt-5 hover:scale-125" 
				color="royalblue" 
				size={40} 
				title="Dark/Light Mode" 
				onClick={() => toggleDarkMode(setUiState)}
			/>
			<p className="text-xs text-blue-500 text-center font-bold" onClick={() => toggleDarkMode(setUiState)}>{uiState.isDarkMode ? 'Light Mode' : 'Dark Mode'}</p> 
			<Download 
				className="m-3 mt-5 hover:scale-125" 
				color="royalblue" 
				size={40} 
				title="Download gamelist.pdf" 
				onClick={() => toPDF()} 
			/>
			<p className="text-xs text-blue-500 text-center font-bold" onClick={() => toPDF()}>Download</p>
		</div>
	);
};

export default Sidebar