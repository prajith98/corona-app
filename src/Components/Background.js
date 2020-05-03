import React, { Component } from 'react'
import './Background.css'
import Menu from './Menu'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PreventContent from './PreventContent'
import SymptomsContent from'./SymptomsContent'
import MythContent from './MythContent'
import News from './News'
class Background extends Component
{
    constructor(){
        super()
    }
    render(){
        return (
            <Router>
                <div>
                    <h1 className='coronavirus'>CORONAVIRUS (COVID-19)</h1>
                    <h2 className='pandemic'>PANDEMIC</h2>
                    <Menu /> 
                    <Switch>
                        <Route path="/corona-app/" exact component={Home} />
                        <Route path="/corona-app/prevent" component={PreventContent} />
                        <Route path="/corona-app/symptoms" component={SymptomsContent} />
                        <Route path="/corona-app/myths" component={MythContent} />
                        <Route path="/corona-app/news" exact component={News} />
                        
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Background
