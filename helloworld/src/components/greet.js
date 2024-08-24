import React from 'react'

const Greet = (props) => {
    const {name,children} = props
    return (
        <div>
            <h2>Greet {name}</h2>
            {children}
        </div>  
    ) 
}

export default Greet