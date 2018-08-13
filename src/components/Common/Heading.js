import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Heading extends Component {
    render(){
        const { headingType, message } = this.props;

        let heading, lines = message[0];
        if(message.length > 1){
            lines = <span><span class="line">{ message[0] }</span>&nbsp;<span class="line">{ message[1] }</span></span>    
        }
        switch(headingType){
            case 'h1':
                heading = <h1>{ lines }</h1>;
                break;
            case 'h2':
                heading = <h2>{ lines }</h2>;
                break;
            case 'h3':
                heading = <h3>{ lines }</h3>;
                break;
            case 'h4':
                heading = <h4>{ lines }</h4>;
                break;
            default:
                heading = <h1>{ lines }</h1>;  
        }

        return(
            <div>
                { heading }
            </div>
        )
    }
}

Heading.propTypes = {
    headingType: PropTypes.string,
    message: PropTypes.arr
  };

export default Heading;