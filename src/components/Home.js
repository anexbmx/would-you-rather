import React from 'react';
import { connect } from 'react-redux';
import Poll from './Poll';

class Home extends React.Component {

    state = {
        answerd: false
    }

  
    getQuestions = (answerd) => {
        this.setState({ answerd })
    }


    setActiveButton = (value) => (
        this.state.answerd === value ? 'selected' : ''
    )

    render() {
        const { answerd } = this.state;
        const { authedUser } = this.props;
        const answers = Object.keys(authedUser.answers);
        
        const pollsId = this.props.pollsId.filter(
            pollId => (answerd === answers.includes(pollId))
        );


        return (
            <div className="container">
                <div className="btn-group box-shadow d-flex align-items-center">
                    <button className={`btn-get-polls ${this.setActiveButton(false)} `}
                        onClick={() => this.getQuestions(false)}>UnAnswerd Questions</button>

                    <button className={`btn-get-polls ${this.setActiveButton(true)} `}
                        onClick={() => this.getQuestions(true)}>Answerd Questions</button>

                </div>
                {
                    pollsId.map(pollId => <Poll key={pollId} id={pollId} />)
                }
            </div>
        );
    }
}

const mapStateToProps = ({ authedUser, questions, users }) => ({
    pollsId: Object.keys(questions)
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    authedUser: users[authedUser]
})

export default connect(mapStateToProps)(Home);
