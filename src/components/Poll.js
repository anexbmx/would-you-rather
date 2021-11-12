import React from 'react';
import User from './User';
import { Link } from 'react-router-dom';
import { formatDate, ellipsisText, formatPoll } from '../utils/helpers';
import { FaCheckCircle } from 'react-icons/fa';
import { connect } from 'react-redux';

const styleFaCheck = {
    fontSize: "17px",
    color: "#14b162",
    marginRight: "10px"
}
class Poll extends React.Component {

    render() {
        const { poll } = this.props;
        const { author, optionOne, optionTwo, timestamp, id, selectedOption } = poll;
        
        return (
            <article className="card-poll box-shadow">
                <div className="card-header d-flex align-items-center">
                    <span>By </span>
                    <User user={author} />
                    <span className="date">{formatDate(timestamp)}</span>
                </div>
                <h3>Would You Rather ?</h3>
                <ol className="options">
                    <li>
                        {
                            selectedOption === 'optionOne'
                                ? <FaCheckCircle style={styleFaCheck} />
                                : ''
                        }

                        {ellipsisText(optionOne.text)}
                    </li>
                    <li>
                        {
                            selectedOption === 'optionTwo'
                                ? <FaCheckCircle style={styleFaCheck} />
                                : ''
                        }
                        {ellipsisText(optionTwo.text)}
                    </li>
                </ol>
                <Link to={`/questions/${id}`}>
                    <button className="btn main-btn">View Poll</button>
                </Link>
            </article>
        );
    }
}


const mapStateToProps = ({ authedUser, questions, users }, { id }) => {
    const question = questions[id];

    return {
        authedUser,
        poll: question
            ? formatPoll(question, users[question.author], users[authedUser])
            : null
    }

}
export default connect(mapStateToProps)(Poll);
