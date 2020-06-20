import React from 'react';
import { formatDate, optionInfoFormat } from '../utils/helpers'
import User from './User';
import OptionProgressBar from './OptionProgressBar';

const AnswerdPoll = ({ poll }) => {

    const { author, timestamp, selectedOption } = poll;
    const optionsInfo = optionInfoFormat(poll);

    return (
        <article className="card-poll box-shadow">
            <div className="card-header d-flex align-items-center">
                <span>By </span>
                <User user={author} />
                <span className="date">{formatDate(timestamp)}</span>
            </div>
            <h3>Would You Rather ?</h3>
            <OptionProgressBar selected={selectedOption === 'optionOne'}
                option={optionsInfo.optionOne} />
            <OptionProgressBar selected={selectedOption === 'optionTwo'}
                option={optionsInfo.optionTwo} />

        </article>
    )
}


export default AnswerdPoll;