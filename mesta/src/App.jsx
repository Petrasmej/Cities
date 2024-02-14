import React from 'react';
import { cities } from './data/cz-cities';
import City from './components/city/City';

const App = () => (
  <>
    <h1>Cities</h1>
    <ul className="city-list">
      {cities.map((city) => (
        <City
          key={city.name}
          name={city.name}
          population={city.population}
          area={city.area}
          district={city.district}
          photo={city.photo}
        />
      ))}
    </ul>
  </>
);

export default App;
