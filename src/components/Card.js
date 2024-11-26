import React from "react";

const CharacterCard = ({ character }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}>
      <img src={character.image} alt={character.name} style={{ width: "100%" }} />
      <h3>{character.name}</h3>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
    </div>
  );
};

export default CharacterCard;
