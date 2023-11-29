
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AllPlayers from './components/AllPlayers'
import NewPlayerForm from './components/NewPlayerForm'
import SinglePlayer from './components/SinglePlayer'
import NavBar from './components/NavBar'
import './App.css'
import { Link } from 'react-router-dom';



function App() {


  return (
    <BrowserRouter>
  <NavBar />
    <Routes>
      <Route path="/all-players" element={<AllPlayers />} />
      <Route path="/players/:id" element={<SinglePlayer />} />
      <Route path="/nav-bar" element={<NavBar />} />
      <Route path="/new-player-form" element={<NewPlayerForm />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App
