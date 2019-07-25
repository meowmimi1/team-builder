import React from 'react';

const Cards = props => {
    return (
        
        <div className="memberCard">
            {props.cards.map(card => {
             return ( 
                <div>
                <h2>{card.name}</h2>
                <h2>{card.email}</h2>
                
                <h2>{card.role}</h2>  
                </div>
             )
             })}
          </div>  
           
    )
        }       
export default Cards