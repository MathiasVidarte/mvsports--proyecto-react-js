
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/NavBar/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
     <NavBar />
     <ItemListContainer greeting= {'Bienvenidos a nuestra tienda on-line'} />
     
    </div>

  );
}

export default App;
