import React from 'react'
import { connect } from 'react-redux'
import { formatUserBoard } from '../utils/helpers';
import { FaCheckDouble, FaPlus } from 'react-icons/fa';
import { GiRibbonMedal } from 'react-icons/gi';
import User from './User';

const UserBoard = ({ userBoard }) => {

    const { user, score, nbrAnswers, nbrQuestions } = userBoard;
    
    return (
        <li >
            <div>
                <div>
                    <User user={user} />

                </div>
                <hr className="divider" />
                <ul className="user-board-score d-flex align-items-center justify-content-center">
                    <li className="score">
                        <div className="icon">
                            <GiRibbonMedal />
                        </div>
                        <div>
                            <span>{score}</span>
                            <p>Score</p>
                        </div>
                    </li>
                    <li className="answerd-question">
                        <div className="icon">
                            <FaCheckDouble />
                        </div>
                        <div>
                            <span>{nbrAnswers}</span>
                            <p>Answerd Question</p>
                        </div>
                    </li>
                    <li className="created-question">
                        <div className="icon">
                            <FaPlus />
                        </div>
                        <div>
                            <span>{nbrQuestions}</span>
                            <p>Created Question</p>
                        </div>
                    </li>
                </ul>
            </div>
        </li>
    )
}




const mapStateToProps = ({ users }, { id }) => ({

    userBoard: users[id] ? formatUserBoard(users[id]) : null

})

export default connect(mapStateToProps)(UserBoard);