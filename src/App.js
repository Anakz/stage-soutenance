import './App.css';
import TableUtilisateurs from './components/table_utilisateurs/TableUtilisateurs'
import Navbare from './components/navbar/Navbare';

function App() {
  return (
    <div className="App">
      
      <Navbare />
      <div className="App-header">
        <div className="App-body">

          
          <TableUtilisateurs />

        </div>        
      </div>
    </div>
  );
}

export default App;
