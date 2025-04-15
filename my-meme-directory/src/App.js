import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppNavbar from "./components/Navbar";
import MemeCard from "./components/MemeCard";
import MemeTable from "./components/Table";
import useMemes from "./hooks/useMemes";
import "./App.css";

const ListView = (memes) => (
  <div className="list-view">
    <h1>Memes List</h1>
    {memes.map((meme) => (
      <MemeCard key={meme.id} meme={meme} />
    ))}
  </div>
);

const App = () => {
  const [memes, setMemes] = useMemes();

  return (
    <Router>
      <AppNavbar />
      <div className="container">
        <Routes>
          <Route
            path="/table"
            element={<MemeTable memes={memes} onUpdateMeme={setMemes} />}
          />
          <Route path="/list" element={<ListView memes={memes} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
