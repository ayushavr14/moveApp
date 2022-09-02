import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import SimpleBottomNavigation from "./components/header/mainNav";
import Trending from "../src/components/header/Pages/Trending/Trending";
import Movies from "../src/components/header/Pages/Movies/Movies";
import Series from "../src/components/header/Pages/Series/Series";
import Search from "../src/components/header/Pages/Search/Search";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="App">
        <Container>
          <Routes>
            <Route exact path="/" element={<Trending />} />
            <Route exact path="/movies" element={<Movies />} />
            <Route exact path="/series" element={<Series />} />
            <Route exact path="/search" element={<Search />} />
          </Routes>
        </Container>
      <SimpleBottomNavigation />
      </div>
      </Router>
    </>
  );
}

export default App;
