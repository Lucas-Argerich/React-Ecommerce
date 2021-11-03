import './App.css';
import NavBar from './components/navBar';
import ItemListContainer from './containers/itemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
