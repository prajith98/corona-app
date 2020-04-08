import React from 'react'
import './Background.css'

function Death(props) {
    return (
        <div className='death'>
            <h2 className='cases'>{props.value}</h2>
        </div>
    )
}

export default Death
