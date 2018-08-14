import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
    render(){
        const { placeholder, className, val, handleChange, type, autofocus, onclick, isError, data, onError} = this.props;
        
        let classNames;
        if(className !== undefined){
            classNames = className.join(' ');
        }

        let handleKeyPress = (event) => {
            if(event.key == 'Enter'){
                if(!isError){
                    onclick(data);
                }
                else{
                    onError(true);
                }
            }
        }

        return(
            <input type={ type } placeholder={ placeholder } 
                className={ classNames } value={ val } onChange={ (event) => handleChange(event.target.value) }
                onKeyPress={ (event) => handleKeyPress(event) } autoFocus={ autofocus }
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
    onError: PropTypes.func
  };

export default Input;