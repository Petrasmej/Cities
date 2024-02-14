import React from 'react';

const City = ({ name, population, area, district, photo }) => (
  <div className="city">
    <div className="city__info">
      <li className="city__name">{name}</li>
      <li className="city__population">Population: {population}</li>
      <li className="city__area">Area: {area}</li>
      <li className="city__district">District: {district}</li>
    </div>
    <img className="city__photo" src={photo} />
  </div>
);

export default City;
