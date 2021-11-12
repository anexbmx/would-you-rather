import React from 'react';
import { formatDate } from '../utils/helpers';
import User from './User';
import { FaCheck } from 'react-icons/fa';
import { handerAnswerQuestion } from '../actions/shared';
import { connect } from 'react-redux';

class UnAnswerdPoll extends React.Component {
    state = {
        selectedOption: 'optionOne'
    }

    setSelectedOption = (selectedOption) => {
        this.setState({ selectedOption })
    }

    answerQuestion = (e) => {
        e.preventDefault();

        const { poll, dispatch, authedUser } = this.props;
        const { selectedOption } = this.state;

        dispatch(handerAnswerQuestion({
            answer: selectedOption,
            qid: poll.id,
            authedUser
        }))
    }

    render() {
        const { selectedOption } = this.state;
        const { poll, isLoading } = this.props;
        const { author, optionOne, optionTwo, timestamp } = poll;


        return (

            <article className="card-poll box-shadow">
                <div className="card-header d-flex align-items-center">
                    <span>By </span>
                    <User user={author} />
                    <span className="date">{formatDate(timestamp)}</span>
                </div>
                <h3>Would You Rather ?</h3>

                <form className="form-question">
                    <div className="form-group">
                        <input id="option1"
                            onChange={(e) => this.setSelectedOption(e.target.value)}
                            className="form-control"
                            type="radio"
                            name="options"
                            value="optionOne"
                            checked={selectedOption === 'optionOne'} />
                        <label htmlFor="option1">{optionOne.text}</label>
                    </div>
                    <div className="form-group">
                        <input id="option2"
                            onChange={(e) => this.setSelectedOption(e.target.value)}
                            className="form-control"
                            type="radio"
                            name="options"
                            value="optionTwo"
                            checked={selectedOption === 'optionTwo'} />
                        <label htmlFor="option2">{optionTwo.text}</label>
                    </div>
                    <button disabled={isLoading}
                        onClick={this.answerQuestion} className="btn btn-submit">
                        <FaCheck />
                        <span style={{ marginLeft: 10 }}> {isLoading ? 'Loading...' : 'Submit'}</span>
                    </button>
                </form>

            </article>
        )
    }
}

const mapStateToProps = ({ authedUser, loadingBar }) => ({
    authedUser,
    isLoading: loadingBar.default
})
export default connect(mapStateToProps)(UnAnswerdPoll);