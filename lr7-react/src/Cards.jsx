import React from 'react';
import { DATA } from './data';
import './cards.css';

const Cards = () => { 
    return ( 
        <div className='container'> 
            {DATA.map(data => <Card info={data} key={data.name} />)} 
        </div> 
        ); 
    };
    
const Card = ({ info }) => {

    const { img, name, price } = info; 
    
    return ( 
        <div className='product'> 
            <img src={img} alt='Product' /> 
            <p>Назва: {name}</p> 
            <p>Ціна: {price} грн</p> 
        </div> 
        ); 
    }; 
    export default Cards;