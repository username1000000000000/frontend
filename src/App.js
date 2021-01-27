import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, Component } from 'react';
import Axios from 'axios';
import Im from './flame.png'
import Nav from './Nav.js'
import { FileSubmoduleIcon, SearchIcon, BookmarkIcon, BookIcon, TelescopeIcon } from '@primer/octicons-react';
import Im2 from './rename.svg';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Im3 from './elections_01.svg';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

 export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      articles: [],
      searchResults: [],
      faq: [],
      related: [],
      createdat: '',
      engineurl: '',
      processedat: '',
      totaltimetaken: ''
    };
  }
 

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    const { searchQuery } = this.state;
    const search = {
      searchQuery
    };
    Axios
      .post('http://localhost:8282/searchresults', search)
      .then((response) => { 
        this.setState({
          faq: response.data.related_questions,
          searchResults: response.data.organic_results,
          related: response.data.related_searches,
          createdat: response.data.search_metadata,
          processedat: response.data.search_metadata,
          totaltimetaken: response.data.search_metadata,
          engineurl: response.data.search_metadata
        });
        

        console.log(response.data.organic_results);
        console.log(response.data.related_questions);
        console.log(response.data.related_searches);
        console.log(response.data.search_metadata);
    })
      .catch(err => {
        console.error(err);
      });

    
   
   
};


render() {

  



  
  return (
    
<div className="head">
<div className="App">
    <Nav />
    <header className="App-header">
    <TelescopeIcon size={24} />
   <h5 style={{
     color: 'white',
     
   }}>What're you searching for?</h5>
     <form onSubmit={this.handleSubmit}>
    <input 
    type="text" 
    placeholder="" 
    name="searchQuery" 
    onChange={this.handleInputChange}
    className="inputField"
    required
    />
  
    <button 
    type="submit"
    className="submit"
    onSubmit={() => this.onSubmit}
    ><SearchIcon size={16} /></button>
     
    </form>

<div className="share">
    <a href="mailTo:davidrobertson1997@gmail.com"><LinkedInIcon style={{color: 'white', fontSize: 24}}/></a>
    <a><TwitterIcon style={{color: 'white', fontSize: 24}}/></a>
    <a><MailOutlineIcon style={{color: 'white', fontSize: 24}}/></a>
</div>
   

 

    </header>

    


  </div>

<div className="info"
style={{height: 'auto', display: 'flex',flexWrap: 'wrap',width: '100%',justifyContent: 'center',backgroundColor: '#14171a', padding: '50px', paddingTop: '0'}}>




     
    {this.state.searchResults.map(art => (
      
      <div style={{width: '48%',flex: '0 0 48%', margin: '5px', backgroundColor: "#0e1012", padding: '20px', overflow: 'hidden', 
      borderRadius: '10px', height: 'auto', color: 'white', transition: '0.3s'}} className="divs">
        
        <SearchIcon size={24} />
        <h5>{art.title}</h5>
        
        <a href={art.link}>{art.link}</a>
        <p style={{
          fontWeight: '300',
          color: 'white'
        }}>{art.snippet}</p>
        <p>{art.displayed_link}</p>
        <a>{art.date}</a>
        
      </div>
     
      

    ))}
 

  

</div>



</div>

  );


  
}

 }