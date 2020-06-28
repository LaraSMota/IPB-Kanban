import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TrelloBoard from "../components/TrelloBoard";
import Home from "../components/Home";
import AccountSettingsForm from '../components/AccountSettingsForm';
import ErrorReport from '../components/ErrorReport';
import About from '../components/About';
import Terms from '../components/Terms';
import ForgotPassword from '../components/ForgotPassword';
import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';

const AppRouter = () => {
  return (

    <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ SignInForm } />
        <Route path="/signup" exact component={ SignUpForm } />
        <Route path="/terms" exact component={ Terms } />
        <Route path="/forgot-password" exact component={ ForgotPassword } />
        <Route path="/error-report" exact component={ ErrorReport } />
        <Route path="/account-settings" exact component={ AccountSettingsForm } />
        <Route path="/about" exact component={ About } />
        <Route path="/home" exact component={ Home } />
        <Route path="/:boardID" component={TrelloBoard} />
        </Switch>
    </BrowserRouter>
    </div>
  );
};

export default AppRouter;