import React, { Component } from 'react';


class UserDisplay extends Component {
    state = {  } 

    picURL = this.props.pic;
    render() { 
        return (
            <div className='user-display'>
                <img src="https://image.khaleejtimes.com/?uuid=5328b42a-deb5-423d-9228-688a76d4042b&function=fit&type=preview&source=false&q=75&maxsize=1200&scaleup=0"/>
                
                <div className='information'>
                    <h3>{this.props.name}</h3>
                    <p>{this.props.title}</p>
                    <p>{this.props.store}</p>
                </div>


            </div>
        );
    }
}
 
export default UserDisplay;