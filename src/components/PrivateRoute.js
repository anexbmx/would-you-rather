import { Route, Redirect} from 'react-router-dom'
import React from 'react';
import { connect } from 'react-redux';

class PrivateRoute extends React.Component {

    render() {
        const { authedUser, Component, ...routeProps } = this.props;

        return (
            <Route {...routeProps} render={(props) => (
                !!authedUser
                    ? <Component {...props} />
                    : <Redirect to={{
                        pathname: '/login',
                        state: { from: props.location }
                    }} />
            )} />
        )
    }
}

const mapStateToProp = ({authedUser}) => ({authedUser});
export default connect(mapStateToProp)(PrivateRoute);
