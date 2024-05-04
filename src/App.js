import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
const API = "https://randomuser.me/api/?results=20";

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      const res = await fetch(API);
      const data = await res.json();
      setPeople(data.results);
      console.log(people);
    };

    fetchPeople();
  }, []);

  return <div className="App"></div>;
}

export default App;
