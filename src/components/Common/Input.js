import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
    render(){
        const { placeholder } = this.props;
        const { className } = this.props;
        const { val } = this.props;
        const { handleChange } = this.props
        return(
            <input class="full-width" type="text" placeholder={ placeholder } class={ className } value={ val } onChange={ (event) => handleChange(event) }/>
        )
    }
}

Input.propTypes = {
    placeholder: PropTypes.string,
    className: PropTypes.string,
    val: PropTypes.string,
    handleChange: PropTypes.func
  };

export default Input;