import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, Component } from 'react';
import {BeakerIcon, ZapIcon, FileCodeIcon, SearchIcon} from '@primer/octicons-react'
import zIndex from '@material-ui/core/styles/zIndex';
import { colors } from '@material-ui/core';
class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
          date: new Date().toLocaleString()
        };
      }
    componentDidMount() {
        
      }
    getDate() {
        var date = { currentTime: new Date().toLocaleString() };
    
        this.setState({
          date: date
        });
      }
    render() {

        return (
            <nav className="nav">
           
              <a href="index.html"><SearchIcon size={16} /> tinytelescope.com</a>
              <a style={{color: 'white',fontWeight: '400'}}> | </a>
                <a style={{color: 'white',fontWeight: '400'}}>Review the docs </a>
              
            </nav>

        );
    }

}
export default Nav;