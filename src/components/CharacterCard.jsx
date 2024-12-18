const CharacterCard = ({ character }) => {
    return (
      <div className="card">
        <img src={character.image} alt={character.name} />
        <div className="details">
          <h2>{character.name}</h2>
          <p>
            <strong>Status:</strong> {character.status} - {character.species}
          </p>
          <p>
            <strong>Last known location:</strong> {character.location.name}
          </p>
          <p>
            <strong>First seen in:</strong> {character.origin.name}
          </p>
        </div>
      </div>
    );
  };
  
  export default CharacterCard;