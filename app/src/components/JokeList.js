import React from 'react'
import {connect} from 'react-redux'

import {getJokes} from '../actions/actions'



export const JokeList = props => {

    const fetchJokes = e => {
        e.preventDefault()
        props.getJokes()
    }

    return (
        <div>
            <h1>Random Joke Finder</h1>
            <button onClick={fetchJokes}>Find Jokes</button>
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
  
