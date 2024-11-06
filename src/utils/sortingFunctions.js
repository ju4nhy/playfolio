export const sortAlphabetically = (gameList, setGameList, sortDirection, setSortDirection) => {
    const sortedList = [...gameList].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      return sortDirection === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    });
    setGameList(sortedList);
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };

  export const sortByReleaseYear = (gameList, setGameList, sortDirection, setSortDirection) => {
    const sortedList = [...gameList].sort((a, b) => {
      const yearA = a.releaseYear;
      const yearB = b.releaseYear;
      return sortDirection === 'asc' ? yearA - yearB : yearB - yearA
    });
    setGameList(sortedList);
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };

  export const sortByPlatform = (gameList, setGameList, sortDirection, setSortDirection) => {
    const sortedList = [...gameList].sort((a, b) => {
      const nameA = a.platform.toLowerCase();
      const nameB = b.platform.toLowerCase();
  
      // Extract numbers from the platform names
      const numberA = parseInt(nameA.match(/\d+/), 10) || 0;
      const numberB = parseInt(nameB.match(/\d+/), 10) || 0;
  
      if (numberA === numberB) {
        return sortDirection === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
      }
  
      return sortDirection === 'asc' ? numberA - numberB : numberB - numberA;
    });
  
    setGameList(sortedList);
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };

  export const sortByRating = (gameList, setGameList, sortDirection, setSortDirection) => {
    const sortedList = [...gameList].sort((a, b) => {
      const ratingA = a.rating || 0;
      const ratingB = b.rating || 0;
      return sortDirection === 'asc' ? ratingA - ratingB : ratingB - ratingA;
    });
    setGameList(sortedList);
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  }