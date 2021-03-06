import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [voteArray, setVoteArray] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0))
    let highestVotedIndex = 0, highestVote = 0;

    voteArray.forEach((voteValue, index) => {
        if (voteValue > highestVote) {
            highestVotedIndex = index;
            highestVote = voteValue;
        }
    });

    const handleNextAnecdoteClick = () => {
        let randomIndex = Math.floor(Math.random() * (anecdotes.length - 1));
        setSelected(randomIndex);
    }

    const handleVoteClick = () => {
        const voteCopy = [...voteArray];
        voteCopy[selected]++;
        setVoteArray(voteCopy);
    }

    return (
        <>
            <h1>Anecdote of the day</h1>
            <div>
                {props.anecdotes[selected]}
            </div>
            <div>
                has {voteArray[selected]} votes
            </div>
            <button onClick={handleVoteClick}>
                vote
            </button>
            <button onClick={handleNextAnecdoteClick}>
                next anecdote
            </button>
            <h1>Anecdote with the most votes</h1>
            <div>
                {props.anecdotes[highestVotedIndex]}
            </div>
            <div>
                has {voteArray[highestVotedIndex]} votes
            </div>
        </>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)