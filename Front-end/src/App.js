import React from 'react';
import './App.css';
import SignIn from './pages/SignIn';
import About from './pages/About';
import AccountSettings from './pages/AccountSettings';
import Board from './pages/Board';
import CreateBoard from './pages/CreateBoard';
import ErroReport from './pages/ErroReport';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Terms from './pages/Terms';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
        <Router>
            <Switch>
                <Route exact path='/' component={SignIn}/>
                <Route path='/about' component={About}/>
                <Route path='/account-settings' component={AccountSettings}/>
                <Route path='/board' component={Board}/>
                <Route path='/create-board' component={CreateBoard}/>
                <Route path='/error-report' component={ErroReport}/>
                <Route path='/forgot-password' component={ForgotPassword}/>
                <Route path='/home' component={Home}/>
                <Route path='/signup' component={SignUp}/>
                <Route path='/terms' component={Terms}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
