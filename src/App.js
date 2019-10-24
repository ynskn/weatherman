import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

//copying API Key from the API website --> make API Calls for your app
const API_KEY = 'a876a56ad1e3fae90c3bd0b90b30c551';
//copying API Key from the API website --> make API Calls for your app

class PerkyPig extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined //initial state of the object
  }
  getWeather = async (e) => {
    e.preventDefault(); //prevents the default behaviour
    const CITY = e.target.elements.CITY.value;   //the value we type
    const COUNTRY = e.target.elements.COUNTRY.value;   //the value we type
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${CITY},${COUNTRY}&appid=${API_KEY}&units=metric`);

    //`````````` use this ``````````
    ///not '''''''''''''''''

    const data = await api_call.json();   //converts to a JSON file
    if (CITY && COUNTRY)  {

        this.setState({
          temperature: data.main.temp, //the things that we are looking for live in the Data ==> Main ==> Temp slot.
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ""
        });
      }//if the values put in city and the country are true, run the code

    else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter a valid value"
      });
    }



  /* Deleted for Error Handling

    Deleted for Error Handling */
  }
  render() {
    return (
      <div>
        <Titles/>
        <Form getWeather={this.getWeather}/>

        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
};

export default PerkyPig;
