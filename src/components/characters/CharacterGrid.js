import React, { useEffect, useState } from "react";
import CharacterItem from "./CharacterItem";
import axios from "axios";
const CharacterGrid = ({ items, isLoading, text }) => {
  const [item, setItems] = useState(items);
  let grid = item.map((el) => <CharacterItem key={el.char_id} item={el} />);
  useEffect(() => {
    const fetchSpecific = async () => {
      try {
        const result = await axios.get(
          `https://www.breakingbadapi.com/api/characters?name=${text}`
        );
        setItems(result.data);
      } catch (err) {
        console.log(err.response);
      }
    };
    fetchSpecific();
  }, [text]);
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="cards">{grid}</section>
  );
};

export default CharacterGrid;
