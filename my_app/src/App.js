import './App.css';
import Moviecard from './components/Moviecard';
import Home from './pages/Home';

function App() {
  const movieNumber = 1;
  return (
    <>
      {/* <Home /> */}
      <Home />
      {/* {movieNumber == 1 ? (<Moviecard movie={{ url: Ramayana, title: "Ramayana", info: "Threthayuga" }} />) : (<Moviecard movie={{ url: Ramayana, title: "Mahabharatha", info: "Dwaparayuga" }} />)} */}
      {/* <Moviecard movie={{ url: Ramayana, title: "Ramayana", info: "Threthayuga" }} /> */}
    </>
  );
}

export default App;
