import React from 'react'

export const Joke = props => {
    const showAnswer = e => {
        const answer = document.getElementById(e)
        answer.classList.remove('invisible')
        // const share = document.querySelector('.fb-share-button')
        // share.classList.remove('invisible')
    }
    return (
        <div className='jokeCard'>
            <h4 className='setup' onClick={() => {showAnswer(props.joke.id)}}><a>{props.joke.setup}</a></h4>
            <p className='invisible punchline' id={props.joke.id}>{props.joke.punchline}</p>
            {/* <div className="fb-share-button invisible" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Share</a></div> */}
            
        </div>
    )
}

export default Joke
