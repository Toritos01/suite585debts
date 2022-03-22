import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import DebtsDisplayer from './components/debtsDisplayer';
import UserSelector from './components/userSelector';
import Header from './components/header';
import Debt from './interfaces/debtsInterface';
import User from './interfaces/userInterface';

var userExample: User = { name: "Bob", debtsList: [] }
var userExample2: User = { name: "Mramdas", debtsList: [] }
var userExample3: User = { name: "Jurch", debtsList: [] }

var debtExample: Debt = {
  owedTo: userExample,
  amount: 10,
  type: "dollars",
};
var debtExample2: Debt = {
  owedTo: userExample2,
  amount: 0.5,
  type: "sandwiches",
};
var debtExample3: Debt = {
  owedTo: userExample3,
  amount: 6.9,
  type: "euros",
};

var debtListExample: Debt[] = [debtExample, debtExample2, debtExample3]
var userExample4: User = { name: "Brandon", debtsList: [debtExample, debtExample2, debtExample3] }
let userListExample = [userExample4, userExample];


function App() {
  const emptyUser: User = { name: "", debtsList: [] }
  const [user, setUser] = useState(emptyUser);
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <UserSelector userList={userListExample} setUser={setUser} />
        <DebtsDisplayer name={user.name} debtsList={user.debtsList} />
      </header>
    </div>
  );
}

export default App;
