import React from 'react';
import './App.css';
import Layout from './components/Layout';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div style={{display: "flex",
    alignItems: "center",
    justifyContent: "center"}}>
     <Menu/>
     </div>
<Layout/>
    </div>
  );
}

export default App;
