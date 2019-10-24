import React from 'react';

const Form = props => ( //explicitly return this
  <form onSubmit={props.getWeather}>
    <input type='text' name='CITY' placeholder='City...'/>
    <input type='text' name='COUNTRY' placeholder='Country...'/>
    <button>Get Weather</button>
  </form>
);


    //no state in this as well -->
/*
    class Form  extends React.Component {
      render () {
        return (

          <form
            onSubmit={this.props.getWeather}>

            <input type='text' name='city' placeholder='City...'/>
            <input type='text' name='country' placeholder='Country...'/>
            <button>Get Weather</button>

          </form>

    );
  }
};
*/
export default Form;
