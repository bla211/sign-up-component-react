import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
    render(){
        const { isChecked, toggleChecked } = this.props;
        
        return(    
            <label class="checkbox-wrapper">
                <input type="checkbox" checked={ isChecked } onChange={ () => toggleChecked() }/>
                <span class="checkmark"></span>
            </label>
        )
    }
}

Checkbox.propTypes = {
    isChecked: PropTypes.bool,
    toggleChecked: PropTypes.string,
  };

export default Checkbox;