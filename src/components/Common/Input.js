import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
    constructor(props) {
        super(props);  

        // This binding is necessary to make `this` work in the callback
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress = (event) => {
        if(event.key == 'Enter'){
            if(!this.props.isError){
                this.props.onclick(this.props.data);
            }
            else{
                this.props.onError(true);
            }
        }
    }

    render(){
        const { placeholder, className, val, handleChange, type, autofocus} = this.props;
        return(
            <input class="full-width" type={ type } placeholder={ placeholder } 
                class={ className.join(' ') } value={ val } onChange={ (event) => handleChange(event) }
                onKeyPress={ this.handleKeyPress } autofocus={ autofocus }
            />
        )
    }
}

Input.propTypes = {
    placeholder: PropTypes.string,
    className: PropTypes.arr,
    val: PropTypes.string,
    handleChange: PropTypes.func,
    type: PropTypes.string,
    autofocus: PropTypes.bool,
    
    onclick: PropTypes.func,
    data: PropTypes.string,
    isError: PropTypes.bool,
    onError: PropTypes.string
  };

export default Input;