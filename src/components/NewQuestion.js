import React from 'react';
import { connect } from 'react-redux';
import { handleNewQuestion } from '../actions/shared';
import { Redirect } from 'react-router-dom'
class NewQuestion extends React.Component {
    state = {
        optionOneText: '',
        optionTwoText: '',
        toHome: false
    }

    onChangeText = (event) => {
        const { name, value } = event.target;
        this.setState((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    addNewQuestion = (e) => {
        e.preventDefault();

        const { dispatch, authedUser } = this.props;
        const { optionOneText, optionTwoText } = this.state;
        const author = authedUser;

        dispatch(handleNewQuestion({
            optionOneText,
            optionTwoText,
            author
        }))

        this.setState((prev) => ({
            ...prev,
            toHome: true
        }))
    }

    disableSubmitButton = () => {
        const { optionOneText, optionTwoText } = this.state;
        return optionOneText.length === 0 || optionTwoText.length === 0;
    }
    render() {

        const { optionOneText, optionTwoText, toHome } = this.state;

        if (toHome)
            return <Redirect to="/" />

        return (
            <article className="new-question">
                <h2 className="m-0">Create New Question</h2>
                <p className="text-secondary ">Complete The Question</p>
                <form>
                    <h4 className="m-0">Would You Rather ?</h4>
                    <hr />
                    <div>
                        <input value={optionOneText} name="optionOneText"
                            type="text"
                            placeholder="Enter Text Option One Here"
                            onChange={this.onChangeText} />
                    </div>
                    <div>
                        <input value={optionTwoText} name="optionTwoText"
                            type="text"
                            placeholder="Enter Text Option Two Here"
                            onChange={this.onChangeText} />
                    </div>
                    <button disabled={this.disableSubmitButton()} onClick={this.addNewQuestion} className="btn main-btn">Submit</button>
                </form>
            </article>
        )
    }
}

export default connect(({ authedUser }) => ({ authedUser }))(NewQuestion);