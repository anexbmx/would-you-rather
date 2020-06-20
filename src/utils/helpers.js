

export const formatPoll = (question, author, authedUser) => {
    const { id } = question;
    const answerId = Object.keys(authedUser.answers).find(key => key === id);
    const selectedOption = authedUser.answers[answerId];

    return {
        ...question,
        author,
        selectedOption
    }
}

export const formatDate = (timestamp) => {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(timestamp).toDateString(undefined, options);
}

export const ellipsisText = (text, nbrChar = 15) => text.length > nbrChar
    ? text.substring(0, 10) + '...'
    : text;



export const optionInfoFormat = ({ optionOne, optionTwo }) => {

    const votesOne = optionOne.votes.length;
    const votesTwo = optionTwo.votes.length;
    const votesLength = votesOne + votesTwo;
    return {
        optionOne: {
            count: votesOne,
            percent: ((votesOne / votesLength) * 100).toFixed(1),
            text: optionOne.text,
            votesLength
        },
        optionTwo: {
            count: votesTwo,
            percent: ((votesTwo / votesLength) * 100).toFixed(1),
            text: optionTwo.text,
            votesLength
        }
    }
}

export const getScore = (user) => (
    user.questions.length + Object.keys(user.answers).length
)

export const formatNumber = nbr => nbr < 10 ? '0' + nbr : nbr;


export const formatUserBoard = (user) => {
    const { name, id, avatarURL, questions, answers } = user;

    return {
        user: { id, name, avatarURL },
        nbrQuestions: formatNumber(questions.length),
        nbrAnswers: formatNumber(Object.keys(answers).length),
        score: formatNumber(getScore(user))
    }
}