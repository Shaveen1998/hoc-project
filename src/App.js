import './App.css';
import MapandFilter from './pages/MapandFilter';
import Form from './pages/Form';
import User from './components/User';
import withLoader from './components/withLoader';
import Parent from './pages/Parent';

function App() {

  const UserHoc = withLoader(User)
  
  return (
    <div className="App">
        <h1>React Learn</h1>
      <Parent /> 
         
    </div>
  );
}

export default App;
