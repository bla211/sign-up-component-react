import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../Common/Checkbox';

class Disclaimer extends Component {
    render(){
        const { isChecked, toggleChecked } = this.props;

        return(
            <div id="disclaimer">
                <Checkbox isChecked={ isChecked } toggleChecked={ toggleChecked }/>
                <p class="disclaimer-text">
                    I agree to receive information from Discovery Communications in accordance with the following Privacy Policy
                </p>
            </div>
        )
    }

}

Disclaimer.propTypes = {
    isChecked: PropTypes.bool,
    toggleChecked: PropTypes.string
  };

export default Disclaimer;