import React from 'react';
import './App.css';

const Rows = ({ news }) => {
    return (

        <div className="container">
            
            <div>{ this.state.news.map((q, index) => {
                return (
                <div key={index}>
                    <img src={q.urlToImage} />
                        <h4>{q.title}</h4>
                        <p><a>{q.link}</a></p>
                        <p>{q.snippet}</p> 

                </div>
                                   
                )
                 
            })}
               
            </div>
            
        </div>
            
    )
}
export default Rows;
