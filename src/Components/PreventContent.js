import React from 'react'
import './preventContent.css'
function PreventContent() {
    return (
        <div className='PContent'>
            <h1>Coronavirus Precautions</h1>
            <ul>
                <li>Regular hand washing</li>
                <li>Covering mouth and nose when coughing and sneezing</li>
                <li>If you are taking care of someone who is sick, try to stay 6 feet away – this is the distance virus-containing droplets can travel through a sneeze or cough</li>
                <li>Avoid close contact with anyone showing symptoms of respiratory illness such as coughing and sneezing</li>
                <li>Avoid touching your eyes, nose, and mouth</li>
                <li>Stay home when you are sick</li>
                <li>Clean and disinfect frequently touched objects and surfacesusing a regular household cleaning spray or wipe</li>
            </ul>
            <img src='https://static.toiimg.com/photo/imgsize-343749,msid-75044269/75044269.jpg'></img>
            <img src='https://static.toiimg.com/photo/imgsize-352379,msid-74670283/74670283.jpg' className='steps'></img>
        </div>
    )
}

export default PreventContent
