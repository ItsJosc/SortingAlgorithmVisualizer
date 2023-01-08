import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import sortNav from './Components/navbar'




function App() {
  return (
    <div className="App">
      <header className="App-header">
        {sortNav()}
      </header>
    </div>
  );
}

export default App;
