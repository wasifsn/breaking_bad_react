import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/ui/Header";
import Search from "./components/ui/Search";
import CharacterGrid from "./components/characters/CharacterGrid";

const App = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const handleChange = (e) => {
    console.log(text);
    setText(e.target.value);
  };
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const result = await axios.get(
          `https://www.breakingbadapi.com/api/characters`
        );
        setItems(result.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchItems();
  }, []);
  return (
    <div className="container">
      <Header />
      <Search text={text} onChange={(e) => handleChange(e)} />
      <CharacterGrid isLoading={isLoading} items={items} text={text} />
    </div>
  );
};

export default App;
