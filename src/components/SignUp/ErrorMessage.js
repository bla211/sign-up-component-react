import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorMessage extends Component {
    render(){
        const { errorMessage } = this.props;

        return(
            <div className="error">{ errorMessage }</div>
        )
    }

}

ErrorMessage.propTypes = {
    errorMessage: PropTypes.string
  };

export default ErrorMessage;