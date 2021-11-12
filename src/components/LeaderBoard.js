import React from 'react';
import { connect } from 'react-redux';
import { getScore } from "../utils/helpers";
import UserBoard from './UserBoard';

class LeaderBoard extends React.Component {

    render() {
        const { usersId } = this.props;

        return (
            <div className="container">
                <ul className="user-board">
                    {
                        usersId.map(key => (
                            <UserBoard key={key} id={key} />
                        ))
                    }
                </ul>
            </div>
        )
    }
}



const mapStateToProps = ({ users }) => ({
    usersId: Object.keys(users)
        .sort((a, b) => getScore(users[b]) - getScore(users[a])),
})
export default connect(mapStateToProps)(LeaderBoard)