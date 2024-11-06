import { Form, Field } from 'formik';
import { chunkArray, releaseYearList } from '../utils/utils';

const GameForm = ({ uiState }) => {
  return (
      <Form className="max-w-full mx-auto p-3 bg-white shadow-md rounded-md">
        <div className="flex">
          <div className="w-1/2 p-2">
            
            {/* Game Details Section */}
            <label htmlFor="name" className="block mb-2 text-md text-gray-600 font-semibold">Game name</label>
            <Field id="name" name="name" type="text" className="w-3/5 block mb-2 text-black border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            <label htmlFor="releaseYear" className="block mb-2 text-md text-gray-600 font-semibold" >Release year</label>
            <Field as="select" id="releaseYear" name="releaseYear" className="bg-white text-black border-solid border-grey-900 rounded-md border-1 p-1 mb-3">
              {releaseYearList.map(year => {
                return <option key={year} value={year} onClick={() => handleSelect(year)}>{year}</option>
              })}
            </Field>
            <label htmlFor="developers" className="block mb-2 text-md text-gray-600 font-semibold">Developers</label>
            <Field id="developers" name="developers" type="text" className="w-3/5 text-black mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            <label htmlFor="publisher" className="block mb-2 text-md text-gray-600 font-semibold">Publisher</label>
            <Field id="publisher" name="publisher" type="text" className="w-3/5 text-black mb-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />

            {/* Platform Section */}
            <label htmlFor="platform" className="block text-md font-semibold text-gray-600 my-2 mt-3">Platform</label>
            <div className="flex">
              <div>
                {["PC", "Sony Playstation", "Sony Playstation 2", "Sony Playstation 3", "Sony Playstation 4", "Sony Playstation 5"].map(platform => (
                  <div key={platform}>
                    <Field type="radio" name="platform" value={platform} className="mr-2" />
                    <label className="mb-2 mr-2 text-sm text-gray-600 font-semibold">{platform}</label>
                  </div>
                ))}
              </div>
              <div className="ml-8">
                {["Nintendo NES", "Super Nintendo SNES", "Nintendo 64", "Nintendo Gamecube", "Sega Mega Drive 2"].map(platform => (
                  <div key={platform}>
                    <Field type="radio" name="platform" value={platform} className="mr-2" />
                    <label className="mb-2 mr-2 text-sm text-gray-600 font-semibold">{platform}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-1/2 pl-2">
            {/* Game Modes Section */}
            <label htmlFor="modes" className="block mb-2 mt-2 text-md font-semibold text-gray-600">Game modes</label>
            <div className="flex">
              {["Single-player", "Multiplayer", "Co-Operative"].map(mode => (
                <div key={mode} className="mr-4">
                  <Field type="checkbox" name="mode" value={mode.toLowerCase().replace(' ', '-')} className="mr-2" />
                  <label className="text-xs font-semibold text-gray-600 mb-2 mr-2">{mode}</label>
                </div>
              ))}
            </div>

            {/* Genres Section */}
            <label htmlFor="genres" className="block text-md font-semibold text-gray-600 mt-4">Genres</label>
            <div className="flex mt-2">
              {chunkArray([
                "Action", "Adventure", "Fighting", "Horror", "Platformer",
                "Puzzle", "Racing", "RPG", "FPS Shooter", "Third-Person Shooter",
                "Simulation", "Sports", "Strategy", "Stealth", "Survival",
              ], 5).map((genreGroup, groupIndex) => (
                <div key={groupIndex} className="mr-5">
                  {genreGroup.map(genre => (
                    <div key={genre}>
                      <Field type="checkbox" name="genres" value={genre.toLowerCase().replace(' ', '')} className="mr-2" />
                      <label className="text-xs font-semibold text-gray-600 mb-2 mr-2">{genre}</label>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Rating Section */}
            <div className="flex-1 mt-4">
              <label htmlFor="rating" className="block text-md font-semibold text-gray-600 my-2">Rating</label>
              <p className="text-black">Rate your game on a scale from 40 to 100.</p>
              <Field name="rating" type="number" className="w-1/5 block bg-slate-800 text-center text-6xl mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" min="40" max="100"/>
            </div>
          </div>
        </div>
        <button type="submit" className="w-2/3 bg-gray-800 text-white mt-4 py-2 rounded-md hover:bg-blue-900 focus:outline-none focus:shadow-outline-blue">{uiState.editMode ? 'Edit game' : 'Add game'}</button>
        <button type="reset" className="w-1/3 bg-gray-600 text-white mt-4 py-2 rounded-md hover:bg-blue-900 focus:outline-none focus:shadow-outline-blue">Reset</button>
      </Form>
  )
}

export default GameForm