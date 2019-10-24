import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

//copying API Key from the API website --> make API Calls for your app
const API_KEY = 'a876a56ad1e3fae90c3bd0b90b30c551';
//copying API Key from the API website --> make API Calls for your app

class PerkyPig extends React.Component {

  getWeather = async (e) => {
    e.preventDefault(); //prevent the defaults behaviour when we press the button
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Seoul,kr&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
  }
  render() {
    return (
      <div>
        <Titles/>
        <Form getWeather={this.getWeather}/>
        <Weather/>
      </div>
    );
  }
};

export default PerkyPig;
