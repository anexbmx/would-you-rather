import React from 'react';
import { connect } from 'react-redux';
import User from './User';
import { FaSignOutAlt } from "react-icons/fa";
import { logoutAuthedUser } from '../actions/authedUser';
class ConnectedUser extends React.Component {

    logout = () => {
        const { dispatch } = this.props;
        dispatch(logoutAuthedUser())
    }

    render() {
        const { authedUser } = this.props;
        return (
            authedUser && (
                <div id="connected-user" className="d-flex align-items-center">
                    <User user={authedUser} />
                    <button onClick={this.logout} className="btn main-btn btn-logout">
                        <FaSignOutAlt />
                    </button>
                </div>
            )
        )
    }
}

const mapStatetoProps = ({ authedUser, users }) => ({
    authedUser: authedUser ? users[authedUser] : null
})

export default connect(mapStatetoProps)(ConnectedUser);