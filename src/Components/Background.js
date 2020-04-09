import React, { Component } from 'react'
import './Background.css'
import Total from './Total'
import Death from './Death'
import Recover from './Recover'
import back from './img/back.jpg'
import Prevent from './Prevent'
import Symptoms from './Symptoms'
import Myths from './Myths'
import Table from './Table'
import Menu from './Menu'
class Background extends Component
{
    constructor(){
        super()
        this.state={}
    }
    componentDidMount(){

            fetch(`https://api.covid19india.org/data.json`)
            .then(response => response.json())
            .then((jsonData) => {
                this.setState(jsonData.statewise[0])
            })
            .catch((error) => {
            console.error(error)
            })
    }
    render(){
        return (
            <div>
                    <h1 className='coronavirus'>CORONAVIRUS (COVID-19)</h1>
                    <h2 className='pandemic'>PANDEMIC</h2>
                    <Menu/> 
                        <img className='back' src={back} alt="Trulli" ></img>
                        <Total value={this.state.confirmed}/>
                        <Death value={this.state.deaths}/>
                        <Recover value={this.state.recovered}/> 
                    <marquee hspace="310" behavior="scroll"  direction="left">Central Helpline Number for CoronaVirus: <a href="+91-11-23978046">+91-11-23978046</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Helpline Email ID: <a href="ncov2019@gov.in">ncov2019@gov.in</a> or <a href="ncov2019@gmail.com">ncov2019@gmail.com</a></marquee>
                    <Prevent/>
                    <Symptoms/>
                    <Myths/>
                    <Table/>  
            </div>
        )
    }
}

export default Background
