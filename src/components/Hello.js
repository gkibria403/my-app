import React from 'react'

const Hello= ()=>{
    // return (
    //     <div>
    //         <h1>Hello! I am Golam Kibria</h1>
    //     </div>
    // )
    return React.createElement('div', {id:'hello', className:'dummyClass'},
        React.createElement('h1', null, 'Hello Golam Kibria'))
}

export default Hello;
