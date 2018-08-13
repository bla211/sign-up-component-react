import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../Common/Checkbox';

class Disclaimer extends Component {
    render(){
        const { isChecked, toggleChecked, className, disclaimerMessage } = this.props;

        return(
            <div id="disclaimer">
                <Checkbox isChecked={ isChecked } toggleChecked={ toggleChecked } className={ className }/>
                <p class="disclaimer-text">
                    { disclaimerMessage }
                </p>
            </div>
        )
    }

}

Disclaimer.propTypes = {
    isChecked: PropTypes.bool,
    toggleChecked: PropTypes.string,
    className: PropTypes.string,
    disclaimerMessage: PropTypes.string
  };

export default Disclaimer;