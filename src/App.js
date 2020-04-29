import React from 'react';
import './App.css';
import Table from './components/Table'
import Header from './components/Header'
function App() {
 

  return (
    <>
   <Header name="LeaderBoard" /> {/*Adding Props*/}
    <br></br>
    <br></br>
    <div className="container">
    <Table />
    </div>

    </>
  );
}
export default App;
