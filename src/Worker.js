import React, { Component } from 'react';

class Worker extends Component {
    state = {  } 
    render() { 
        return (

            <div className='worker-card'>
                <h3>{this.props.name}</h3>

                <div className='worker-info'>
                    <p>{this.props.title}</p>
                    <p>{this.props.payRate}/hr</p>
                    <p>{this.props.hours} hrs</p>
                </div>

                <div>
                    <button>Edit</button>
                    <button>Fire</button>
                </div>
                
            </div>
        );
    }
}
 
export default Worker;