import React from 'react'

const Hello = () => {
    // return (
    //     <div className: = 'dummy'>
    //         <h1>Hello yuvraj</h1>
    //     </div>
    // )
    return React.createElement(
        'div',
        {id: 'hello', className: 'dummy'},
        React.createElement('h1', null, 'Hello Yuvraj')
    )
}

export default Hello