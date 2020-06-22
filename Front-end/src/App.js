import React from 'react';
import Main from './pages/Board/Main';
import SignIn from './pages/SignIn/SignInForm';
import SignUp from './pages/SignUp/SignUpForm';
import About from './pages/About/About';
import ErrorReport from './pages/ErrorReport/ErrorReport';
import Terms from './pages/Terms/Terms';
import AccountSettings from './pages/AccountSettings/AccountSettingsForm';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Home from './pages/Home/Home';
import CreateBoard from './pages/CreateBoard/CreateBoardForm';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
	return (
	  <div>
		  <Router>
			  <Switch>
				  <Route exact path='/' component={ SignIn }/>
          <Route path='/signup' component={ SignUp }/>
          <Route path='/terms' component={ Terms }/>
          <Route path='/forgot-password' component={ ForgotPassword }/>
          <Route path='/home' component={ Home }/>
				  <Route path='/about' component={ About }/>
          <Route path='/create-board' component={ CreateBoard }/>
				  <Route path='/board' component={ Main }/>
				  <Route path='/account-settings' component={ AccountSettings }/>
				  <Route path='/error-report' component={ ErrorReport }/>
			  </Switch>
		  </Router>
	  </div>
	);
  }

export default App;