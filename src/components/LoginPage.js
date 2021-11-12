import React from "react";
import { connect } from "react-redux";
import User from "./User";
import Select from 'react-select'
import logo from '../logo.svg';
import { setAuthedUser } from "../actions/authedUser";
import { Redirect } from "react-router-dom";
import { handleReceiveQuestions } from "../actions/questions";

const customStyles = {
    option: (provided) => ({
        ...provided,
        padding: 5,
        paddingLeft: 16
    }),
    control: (provided) => ({
        ...provided,
        backgroundColor: "#F4F5FF",
        height: 55,
    })

}

class LoginPage extends React.Component {

    state = {
        selectedUser: null
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(handleReceiveQuestions());
        console.log("did mount")
    }

    handleInputChange = (option) => {
        this.setState({
            selectedUser: option.value
        })
    }

    login = () => {
        const { dispatch } = this.props;
        dispatch(setAuthedUser(this.state.selectedUser))
    }

    render() {
        const { users, authedUser, location } = this.props;
        const { selectedUser } = this.state;
        const { from } = location.state || { from: { pathname: '/' } };

        if (authedUser) {
            return <Redirect to={from} />
        }

        return (
            <section id="login-box" className="text-center box-shadow">
                <img width="160" src={logo} alt="logo" />
                <h2>Welcome to the would you rather app!</h2>
                <p>Please sign in to continue</p>
                <Select styles={customStyles}
                    placeholder="Select User..."
                    options={users}
                    onChange={this.handleInputChange} />
                <button onClick={this.login} className="btn main-btn"
                    disabled={!selectedUser}>Login</button>
            </section>
        )
    }
}

const mapStateToProps = ({ users, authedUser }) => ({
    authedUser,
    users: Object.keys(users).map(id => ({
        value: id,
        label: <User key={id} user={users[id]} />
    }))
})

export default connect(mapStateToProps)(LoginPage);