import React, { Component } from 'react';

class Expense extends Component {
    state = {  } 
    render() { 
        return (
            <div className='worker-card'>
                <h3>Expense Name</h3>
                <p>Estimated Cost: /month</p>
            </div>
        );
    }
}
 
export default Expense;