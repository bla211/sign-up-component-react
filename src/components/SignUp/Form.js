import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PureForm from '../SignUp/PureForm';

class Form extends Component {
    render(){
        const { signUpState, updateEmail, updateFirstName, updateLastName, toggleAgreesToDisclaimer, updateFormState, updateShowErrors } = this.props;

        return(
            <PureForm signUpState={signUpState} updateEmail={updateEmail} updateFirstName={updateFirstName}
                updateLastName={updateLastName} toggleAgreesToDisclaimer={toggleAgreesToDisclaimer} updateFormState={updateFormState}
                updateShowErrors={updateShowErrors}
            />
        )
    }

}

Form.propTypes = {
    updateEmail: PropTypes.func,
    updateFirstName: PropTypes.func,
    updateLastName: PropTypes.func,
    updateFormState: PropTypes.func,
    signUpState: PropTypes.object,
    toggleAgreesToDisclaimer: PropTypes.func,
    updateShowErrors: PropTypes.func
  };

export default Form;