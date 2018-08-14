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
        const classNames = className.join(' ');
        return(
            <input type={ type } placeholder={ placeholder } 
                className={ classNames } value={ val } onChange={ (event) => handleChange(event) }
                onKeyPress={ this.handleKeyPress } autoFocus={ autofocus }
            />
        )
    }
}

Input.propTypes = {
    placeholder: PropTypes.string,
    className: PropTypes.array,
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