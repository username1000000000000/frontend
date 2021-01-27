const express = require("express");
const cors = require("cors");
const app = express();
const bodyparser = require('body-parser');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('11a4075ec9ef41498bc93e060c98bdd3');
app.use(express.json());
app.use(cors());
app.use(bodyparser.urlencoded({extended: true}))


app.get("/", (req, res) => {
    res.send("It works");
    newsapi.v2.everything({
      q: 'bitcoin',
      from: '2020-12-22',
      to: '2021-01-12',
      language: 'en',
      sortBy: 'relevancy',
      page: 2
    }).then(response => {
      console.log(response);
      
    });
})



app.post("/searchresults", (req, res) => {
    
    
 
    const searchI = req.body.searchQuery
   
    
    var SerpWow = require('google-search-results-serpwow')

    // create the serpwow object, passing in our API key
    let serpwow = new SerpWow('EC72520095214C118E1244A085637D03')
    
    // set up the search parameters
    var params = {
        q: searchI,
      engine: 'google',
      num: '100',
     
    }
    // retrieve the search results as JSON
    serpwow.json(params)
      .then(result => {
        // pretty-print the JSON result
        console.log(JSON.stringify(result, 0, 2));

        const send = JSON.stringify(result, 0, 2)
      res.send(JSON.stringify(result, 0, 2));
       app.get("/searchresults/api", (req, res) => {
         res.send(send)
       })
      })
      .catch(error => {
        console.log(error);
      });
 })
 

 


app.listen(8282, () => {
    console.log("3001 running");
})