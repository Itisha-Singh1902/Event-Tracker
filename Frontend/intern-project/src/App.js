import './App.css';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import Home from './components/Home';
import Favourites from './components/Favourites';


function App() {

  return (
    <>
        <Router>
        <Routes>
         <Route path="/favourites" element={<Favourites />}/>
        <Route path="/" element={<Home />}/>
       
        </Routes>
        </Router>
    </>
  );
}


export default App;
