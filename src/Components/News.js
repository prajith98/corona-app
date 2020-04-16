import React, { Component } from 'react'
import './News.css'
const nl2br = require('react-nl2br');
class News extends Component {
constructor(props) {
    super(props);
    this.state={
        data:[]
    }
}
    componentDidMount(){
        this.interval=setInterval(this.tick,1000)
        fetch(`https://api.covid19india.org/updatelog/log.json`)
        .then(response => response.json())
        .then((jsonData) => {
            this.setState({data : jsonData })
        })
        .catch((error) => {
        console.error(error)
        })
    }   
    
    render() {
        return (
            <div><h3>Updates:</h3>
            {  
                this.state.data.reverse().map((value, index) => {
                    return (
                        <React.Fragment key={index}>
                            <div className="news" key={index}>
                                <h4>{nl2br(value.update)}</h4>
                            </div>
                            <br></br>
                        </React.Fragment>
                    )
                })
            }
            </div>
        )
    }
}

export default News