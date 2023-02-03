//import logo from './logo.svg';
import './App.css';

import React from 'react'
import {BrowserRouter ,Route} from 'react-router-dom'
import { Homepage } from './components/Homepage'
import { Chatpage } from './components/Chatpage'

const App = () => {
  return (
    <div>
        <Route path="/" component={Homepage} exact></Route>
        <Route path="/chats" component={Chatpage}></Route>
    </div>
  )
}

export default App