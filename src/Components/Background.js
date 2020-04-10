import React, { Component } from 'react'
import './Background.css'
import Menu from './Menu'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PreventContent from './PreventContent'
import SymptomsContent from'./SymptomsContent'
import MythContent from './MythContent'
class Background extends Component
{
    
    render(){
        return (
            <Router>
                <div>
                    <h1 className='coronavirus'>CORONAVIRUS (COVID-19)</h1>
                    <h2 className='pandemic'>PANDEMIC</h2>
                    <Menu/> 
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/prevent" component={PreventContent} />
                        <Route path="/symptoms" component={SymptomsContent} />
                        <Route path="/myths" component={MythContent} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Background
