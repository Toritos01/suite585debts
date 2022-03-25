import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import DebtsDisplayer from './components/debtsDisplayer';
import UserSelector from './components/userSelector';
import Header from './components/header';
import Debt from './interfaces/debtsInterface';
import User from './interfaces/userInterface';
import { appModes } from "./appModes"
import ModeSelector from './components/modeSelector';
import AddDebts from './components/addDebts';


var userExample: User = { name: "Bob", debtsList: [] }
var userExample2: User = { name: "Mramdas", debtsList: [] }
var userExample3: User = { name: "Jurch", debtsList: [] }

var debtExample: Debt = {
  owedTo: userExample,
  amount: 10,
  type: "dollars",
  date: new Date(2020, 10, 10),
  description: "Bruh"
};
var debtExample2: Debt = {
  owedTo: userExample2,
  amount: 0.5,
  type: "sandwiches",
  date: new Date(2021, 10, 10),
  description: "Noyes"
};
var debtExample3: Debt = {
  owedTo: userExample3,
  amount: 6.9,
  type: "euros",
  date: new Date(),
  description: "Among us"
};

var debtListExample: Debt[] = [debtExample, debtExample2, debtExample3]
var userExample4: User = { name: "Brandon", debtsList: [debtExample, debtExample2, debtExample3] }
let userListExample = [userExample4, userExample];

function App() {
  const emptyUser: User = { name: "", debtsList: [] }
  const [user, setUser] = useState(emptyUser);
  const [mode, setMode] = useState(appModes.startMenu)
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <ModeSelector setMode={setMode} />
        {displayContents(mode, user, setUser, setMode)}
      </header>
    </div>
  );
}

// Displays the content for the selected mode
function displayContents(mode: appModes, user: User, setUser: any, setMode: any) {
  switch (mode) {
    case appModes.startMenu:
      return (<span></span>);
    case appModes.displayMode:
      return (
        <div>
          <UserSelector userList={userListExample} setUser={setUser} />
          <DebtsDisplayer name={user.name} debtsList={user.debtsList} />
        </div>
      );
    case appModes.addMode:
      return (
        <AddDebts userList={userListExample} setMode={setMode} />
      );
    case appModes.payMode:
      return (<span></span>);
  }
}

export default App;
