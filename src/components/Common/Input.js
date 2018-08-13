import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
    render(){
        const { placeholder, className, val, handleChange, type } = this.props;
        return(
            <input class="full-width" type={ type } placeholder={ placeholder } class={ className.join(' ') } value={ val } onChange={ (event) => handleChange(event) }/>
        )
    }
}

Input.propTypes = {
    placeholder: PropTypes.string,
    className: PropTypes.arr,
    val: PropTypes.string,
    handleChange: PropTypes.func,
    type: PropTypes.string
  };

export default Input;