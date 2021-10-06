
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer";
function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Lautaro Ogando
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Future Systems Engineer
        </a>
      </header>
=======
      <Navbar/>
      <ItemListContainer
      greeting="Productos Destacados"
      />
>>>>>>> d104494f307cc2e8b5cf0f8e8aa4f3fbfe835c95
    </div>
  );
}

export default App;
