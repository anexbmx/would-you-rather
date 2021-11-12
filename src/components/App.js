import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { handleReceiveUsers } from '../actions/users';
import LoginPage from './LoginPage';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home';
import PrivateRoute from './PrivateRoute';
import Navbar from './NavBar';
import QuestionPage from './QuestionPage';
import NewQuestion from './NewQuestion';
import LoadingBar from 'react-redux-loading';
import LeaderBoard from './LeaderBoard';


class App extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleReceiveUsers())
  }



  render() {


    return (
      <div className="App">
        <Router>
          <Fragment>
            <header>
              <Navbar />
              <LoadingBar />
            </header>
            <PrivateRoute path="/" exact Component={Home} />
            <Route  path="/login" component={LoginPage} />
            <PrivateRoute  path="/questions/:id" Component={QuestionPage} />
            <PrivateRoute  path="/add" Component={NewQuestion} />
            <PrivateRoute  path="/leaderboard" Component={LeaderBoard} />
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default connect()(App);
