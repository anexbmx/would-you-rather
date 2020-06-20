import React from 'react';
import { connect } from 'react-redux';
import UnAnswerdPoll from './UnAnswerdPoll';
import AnswerdPoll from './AnswerdPoll';
import { formatPoll } from '../utils/helpers';
import { withRouter } from 'react-router-dom';
import PageNotFound from './PageNotFound';

class QuestionPage extends React.Component {
    render() {
        const { poll } = this.props;

        return (
            <div className="container">
                {
                    poll
                        ? poll.selectedOption === undefined
                            ? <UnAnswerdPoll poll={poll} />
                            : <AnswerdPoll poll={poll} />
                        : <PageNotFound />
                }
            </div>
        )
    }
}

const mapStateToProps = ({ authedUser, questions, users }, props) => {
    const { id } = props.match.params;
    const question = questions[id];

    return {
        authedUser,
        poll: question
            ? formatPoll(question, users[question.author], users[authedUser])
            : null
    }
}

export default withRouter(connect(mapStateToProps)(QuestionPage));