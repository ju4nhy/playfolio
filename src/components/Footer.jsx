import { Alert } from 'react-bootstrap';

const Footer = ({ uiState, message }) => {
    return (
      <div className={`flex h-12 mt-0 ${uiState.isDarkMode ? 'bg-gray-900' : 'bg-blue-100'}`}>
        <div className="flex-initial h-12 w-2/5 ml-0">
          {message ? <Alert variant="light" className="w-max bg-black border-2 border-solid text-white mt-1">{message}</Alert> : null}
        </div>
        <div className="flex-initial w-3/5 text-right mr-5 mt-3">
          <p className={`font-bold ${uiState.isDarkMode ? 'text-white' : 'text-black'}`}>MyPlayfolio version 1.0</p>
        </div>
      </div>
    );
};

export default Footer