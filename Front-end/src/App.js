import React from 'react';
import './App.css';
import CreateBoardForm from './page/CreateBoardForm';
import SignInForm from './page/SignInForm';
import SignUpForm from './page/SignUpForm';
import BoardForm from './page/Board/BoardForm';
import AccountSettingsForm from './page/AccountSettingsForm';
import ErrorReport from './page/ErrorReport';
import Terms from './page/Terms';
import ForgotPassword from './page/ForgotPassword';
import Home from './page/Home';
import About from './page/About';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';



function App() {
	return (
	  <div>
		  <Router>
			  <Switch>
				  <Route exact path='/' component={ SignInForm }/>
				  <Route path='/create-board' component={ CreateBoardForm }/>
				  <Route path='/signup' component={ SignUpForm }/>
				  <Route path='/board' component={ BoardForm }/>
				  <Route path='/account-settings' component={ AccountSettingsForm }/>
				  <Route path='/error-report' component={ ErrorReport }/>
				  <Route path='/terms' component={ Terms }/>
				  <Route path='/forgot-password' component={ ForgotPassword }/>
				  <Route path='/home' component={ Home }/>
				  <Route path='/about' component={ About }/>
			  </Switch>
		  </Router>
	  </div>
	);
  }

export default App;