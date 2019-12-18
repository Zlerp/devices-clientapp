import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListWrapper from './components/ListWrapper/ListWrapper';


function App() {
  return (
      <div>
        <div className="container">
          <ListWrapper />
        </div>
      </div>
  );
}

export default App;
