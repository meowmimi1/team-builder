import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import {teamData} from "./components/TeamData";
function App() {
  const [teamMember, setTeamMember] = useState(teamData);
  console.log({teamData})
  return (
    <div className="App">
     <Form/>
    </div>
  );
}

export default App;
