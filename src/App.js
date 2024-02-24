import './App.css';
import MapandFilter from './pages/MapandFilter';
import Form from './pages/Form';
import UserContext from './context/userContext';
import { useState } from 'react';

function App() {

  const [name, setName] = useState('shaveen ')
  return (
    <div className="App">
        <h1>React Learn</h1>
      <UserContext value={{name, setName}}>
      <MapandFilter/>
         <Form />
      </UserContext>
       
         
    </div>
  );
}

export default App;
