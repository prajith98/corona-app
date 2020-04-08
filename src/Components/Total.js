import React from 'react'
import './Background.css'

function Total(props) {
    return (
        <div className='total'>
            <h2 className='cases'>{props.value}</h2>
        </div>
    )
}

export default Total
