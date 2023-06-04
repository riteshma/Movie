import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Movies from './Components/Movies';
import MovieInfo from './Components/MovieInfo';



function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/movies' element={<Movies/>} />
     <Route path='/*' element={<Navigate to='/'/>} />
     <Route path='/movieinfo/:id' element={<MovieInfo/>} />
     </Routes>
    </div>
  );
}

export default App;
