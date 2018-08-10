import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../components/SignUp/Form';
import { updateEmail, updateFormState, updateFirstName, updateLastName, toggleAgreesToDisclaimer } from '../actions/signUpActions'

export class SignUp extends Component {

  render() {
    return (
      <Form/>
    );
  }
};

export const mapStateToProps = (state) => {
  return{
    signUpState: state.signUp
  }
}

export const mapDispatchToProps =(dispatch) => {
  return {
    updateEmail: (payload) => {
      dispatch(updateEmail(payload));
    },
    updateFormState: (payload) => {
      dispatch(updateFormState(payload));
    },
    updateFirstName: (payload) => {
      dispatch(updateFirstName(payload));
    },
    updateLastName: (payload) => {
      dispatch(updateLastName(payload));
    },
    toggleAgreesToDisclaimer: () => {
      dispatch(toggleAgreesToDisclaimer());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);