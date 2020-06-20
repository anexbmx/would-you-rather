import React from "react";

class User extends React.Component {

    render() {
        const { user } = this.props;
        return (
            <div id="user-info"  className="d-flex align-items-center">
                <img className="user-avatar" src={user.avatarURL} alt={user.name}/>
                <h5 className="user-fullname">{user.name}</h5>
            </div>
        )
    }
}

export default User;