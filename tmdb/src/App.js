import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import MoviesPage from './MoviesPage';
import { Container } from 'react-bootstrap';




function App() {
  return (
    <div className="App">
      <Container>    
          <MoviesPage/>
</Container>
    </div>
  );
}

export default App;
