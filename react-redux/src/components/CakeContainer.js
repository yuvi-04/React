import React, { useState } from 'react'
import { buyCake } from './redux'
import { connect } from 'react-redux'

function CakeContainer(props) {
    const [number, setNumber] = useState(1)
  return (
    <div>
        <h2>Number of Cakes - {props.numOfCakes}</h2>
        <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
        <button onClick={() => props.buyCake(number)} >Buy {number} Cake</button>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapDisatchToProps = (dispatch) => {
    return {
        buyCake: (number) => dispatch(buyCake(number))
    }
}

export default connect(
    mapStateToProps,
    mapDisatchToProps
)(CakeContainer)
