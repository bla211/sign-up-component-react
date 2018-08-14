import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    render(){
        const { title, data, isError, onError } = this.props;
        let { onclick } = this.props;
        
        if(isError){
            onclick = () => {
                onError(true);
            }
        }


        return(
            <button onClick={ () => onclick(data) }>{ title }</button>
        )
    }

}

Button.propTypes = {
    title: PropTypes.string,
    onclick: PropTypes.func,
    data: PropTypes.string,
    isError: PropTypes.bool,
    onError: PropTypes.func
  };

export default Button;