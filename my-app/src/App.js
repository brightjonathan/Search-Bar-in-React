import './App.css';
import Searchbar from './Component/Searchbar'
import Book_data from './Data.json'



function App() {
  return (
    <div className="App">
     <Searchbar  data={Book_data}/>
     {/* <Searchbar  data={Book_data}/>
     <Searchbar  data={Book_data}/> */}
    </div>
  );
}

export default App;
