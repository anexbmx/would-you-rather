import React from 'react'
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa'

const OptionProgressBar = ({ selected, option }) => {

    return (
        <div className="option-progress-bar pos-relative ">
            <div style={{ width: `${option.percent}%` }}
                data-percent={option.percent + "%"}
                className="overlay">

            </div>
            <p className="percent">{option.percent}%</p>
            <div className="option-info d-flex align-items-center flex-grow-1">
                {
                    selected
                        ? <FaCheckCircle fontSize="27px" color="#14b162" />
                        : <FaRegCircle fontSize="27px" color="#F44336" />
                }
                <div className="option-text d-flex align-items-center flex-grow-1 justify-content-between">
                    <b className="pos-relative"> {option.text}</b>
                    <p className="text-secondary m-0">
                        <b>{option.count}</b> out of <b>{option.votesLength}</b> votes</p>
                </div>
            </div>
        </div>
    )
}

export default OptionProgressBar;