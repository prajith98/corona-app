import React, { Component } from 'react'
import './menu.css'
import {Link} from 'react-router-dom'

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
        home_active: "active",
        news_active: null,
    };
  }

  render() {
    return (
            
            <div className="topnav" >
              <Link to="/" className={this.state.home_active} onClick={ () => this.setState({home_active: "active",news_active:null })} style={{ textDecoration: 'none' }}>Home</Link>
              <Link to="/news" className={this.state.news_active} onClick={ () => this.setState({home_active: null,news_active:"active"}) } style={{ textDecoration: 'none' }}>News</Link>
              <Link to="#contact" style={{ textDecoration: 'none' }}>Contact</Link>
              <Link to="#about" style={{ textDecoration: 'none' }}>About</Link>
            </div>
            
    )
  }
}

export default Menu
