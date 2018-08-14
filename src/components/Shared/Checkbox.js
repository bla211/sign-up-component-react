import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
    render(){
        const { isChecked, toggleChecked, className } = this.props;
        const checkMarkClasses = ["checkmark", className]
        return(    
            <label className="checkbox-wrapper">
                <input type="checkbox" checked={ isChecked } onChange={ () => toggleChecked() }/>
                <span className={ checkMarkClasses.join(' ') }></span>
            </label>
        )
    }
}

Checkbox.propTypes = {
    isChecked: PropTypes.bool,
    toggleChecked: PropTypes.string,
    className: PropTypes.string
  };

export default Checkbox;