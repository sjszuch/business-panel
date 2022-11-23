import React, { Component } from 'react';

class Temp extends Component {
    state = {  } 
    render() { 
        return (
            <div className='card-type-1'>
                <h3>{this.props.city}</h3>
                <p>{this.props.tempF}</p>
                <p>Slightly Cloudy</p>
                <a href='www.google.com'>View More</a>
            </div>
        );
    }
}
 
export default Temp;