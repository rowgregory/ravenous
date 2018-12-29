import React from "react";
import {Component} from 'react'
import './Business.css';



export class Business extends Component{
  render(){

    const { business } = this.props;

    return(
      <div className="Business">
      <div className="image-container">
        <img src={business.imageSrc} alt=''/>
      </div>
      <h2>{business.name}</h2>
      <div className="Business-information">
        <div className="Business-address">
          <p>{business.address}y</p>
          <p>{business.city}</p>
          <p>{business.state}</p>
          <p>{business.zipCode}</p>
        </div>
        <div className="Business-reviews">
          <h3>{business.category}</h3>
          <h3 className="rating">4.5 stars</h3>
            <p>{business.reviewCount}</p>
        </div>
      </div>
      </div>
    )
  }
};


