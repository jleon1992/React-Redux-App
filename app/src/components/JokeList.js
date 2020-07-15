import React from 'react'
import {connect} from 'react-redux'
import Joke from './Joke'
import {getJokes} from '../actions/actions'



export const JokeList = props => {
    console.log(props.jokes)
    const fetchJokes = e => {
        e.preventDefault()
        props.getJokes()
    }

    return (
        <div>
            <h1>Random Joke Finder</h1>
            <button onClick={fetchJokes}>Find Jokes</button>
            <div>
                {props.jokes.map( joke => (                    
                    <Joke key={joke.id} joke={joke} />
                 ) )}
                 {props.error && <p>Oh no, something went wrong :( {props.error}</p>}
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    jokes: state.jokes,
    error: state.error
  })
  
  
  export default connect(mapStateToProps,
    { getJokes }
    )(JokeList);
  
