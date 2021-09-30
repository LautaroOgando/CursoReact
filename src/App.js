
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer
      greeting="Productos Destacados"
      />
    </div>
  );
}

export default App;
