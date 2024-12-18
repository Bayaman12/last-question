import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from './redux/characterSlice';
import CharacterCard from './components/CharacterCard';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { characters, status, error } = useSelector((state) => state.characters);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Rick and Morty Characters</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      <div className="card-container">
        {characters.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>
    </div>
  );
}

export default App;