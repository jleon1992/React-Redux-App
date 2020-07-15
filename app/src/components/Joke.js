import React from 'react'

export const Joke = props => {
    const showAnswer = e => {
        const answer = document.getElementById(e)
        answer.classList.remove('invisible')
    }
    return (
        <div>
            <h4 className='setup' onClick={() => {showAnswer(props.joke.id)}}><a>{props.joke.setup}</a></h4>
            <p className='invisible' id={props.joke.id}>{props.joke.punchline}</p>
        </div>
    )
}

export default Joke
