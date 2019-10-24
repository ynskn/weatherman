import React from 'react';
/*
class Weather extends React.Component {
  render() {
    return (
      <div>
        { this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p> }
        { this.props.temperature && <p>Temperature: {this.props.temperature}</p> }
        { this.props.humidity && <p>Humidity: {this.props.humidity}</p> }
        { this.props.description && <p>Condition: {this.props.description}</p> }
        { this.props.error && <p>{this.props.error}</p> }

      </div>//Conditional Statement
        );
    }
  };*/
/*
const Weather = (props) => {
  return (
    <div>
      { props.city && props.country && <p>Location: {props.city}, {props.country}</p> }
      { props.temperature && <p>Temperature: {props.temperature}</p> }
      { props.humidity && <p>Humidity: {props.humidity}</p> }
      { props.description && <p>Condition: {props.description}</p> }
      { props.error && <p>{props.error}</p> }

    </div>//Conditional Statement
  );
in an arrow function, we are returning only one single element ---> div this case
}

*/

//Stateless
const Weather = props => (
    <div>
      { props.city && props.country && <p>Location: {props.city}, {props.country}</p> }
      { props.temperature && <p>Temperature: {props.temperature}</p> }
      { props.humidity && <p>Humidity: {props.humidity}</p> }
      { props.description && <p>Condition: {props.description}</p> }
      { props.error && <p>{props.error}</p> }

    </div>//Conditional Statement
  );

  export default Weather;
