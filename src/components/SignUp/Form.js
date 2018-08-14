import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Common/Button';
import Disclaimer from '../SignUp/Disclaimer';
import ErrorMessage from '../SignUp/ErrorMessage';
import Heading from '../Common/Heading';
import Input from '../Common/Input';

class Form extends Component {
    render(){
        const { signUpState, updateEmail, updateFirstName, updateLastName, toggleAgreesToDisclaimer, updateFormState, updateShowErrors } = this.props;
        
        let input, button, h1, h2, h3, h4, disclaimer, errorMessage = '', isError = false, error;
        const errorClass = 'is-not-valid';
        if(signUpState.formState === 'email'){
            h1 = <Heading headingType="h1" message={["Join the list"]}/>;
            h2 = <Heading headingType="h2" message={ ["Sign up for", "the TLC newsletter"] }/>;            
            
            const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            let isValidEmail = emailRegex.test(signUpState.userInfo.email);            
            let emailError, disclaimerError;
            if(!isValidEmail && !signUpState.userInfo.isAgreesToDisclaimer){
                isError = true, emailError = true, disclaimerError = true;
                errorMessage = '* fields not valid, please check.'               
            }
            else if(!isValidEmail){
                isError = true, emailError = true;
                errorMessage = '* Please enter a valid email'
            }
            else if(!signUpState.userInfo.isAgreesToDisclaimer){
                isError = true, disclaimerError = true;
                errorMessage = '* You must opt in';
            }

            if(signUpState.showErrors){
                error = <ErrorMessage errorMessage={ errorMessage }/>
                emailError ? emailError = errorClass : disclaimerError = '';
                disclaimerError ? disclaimerError = errorClass : disclaimerError = '';
            }
            input = <Input placeholder="enter email address" type="text" className={ ["full-width", emailError] }
                        val={ signUpState.userInfo.email } handleChange={ updateEmail }
                        onclick={ updateFormState } data="name" isError={ isError } onError={ updateShowErrors }
                    />;
            button = <Button title="next" onclick={ updateFormState } data="name" isError={ isError } onError={ updateShowErrors }/>
            const disclaimerMessage = "I agree to receive information from Discovery Communications in accordance with the following Privacy Policy"

            disclaimer = <Disclaimer isChecked={ signUpState.userInfo.isAgreesToDisclaimer } toggleChecked={ toggleAgreesToDisclaimer } className={ disclaimerError } disclaimerMessage={ disclaimerMessage }/>
        }
        else if(signUpState.formState === 'name'){
            h1 = <Heading headingType="h1" message={["Join the list"]}/>;
            h2 = <Heading headingType="h2" message={["Almost done! Please enter", "your first and last name"]}/>
            
            let firstNameError, lastNameError;
            if(signUpState.userInfo.name.first.length < 2 && signUpState.userInfo.name.last.length < 2){
                isError = true, firstNameError = true, lastNameError = true;
                errorMessage = '* fields not valid, please check.'
            }
            else if(signUpState.userInfo.name.first.length < 2){
                isError = true, firstNameError = true;
                errorMessage = '* Please enter a valid first name'
            }
            else if(signUpState.userInfo.name.last.length < 2){
                isError = true, lastNameError = true;
                errorMessage = '* Please enter a valid last name';
            }
            if(signUpState.showErrors){
                error = <ErrorMessage errorMessage={ errorMessage }/>
                firstNameError ? firstNameError = errorClass : firstNameError = '';
                lastNameError ? lastNameError = errorClass : lastNameError = '';
            }
            input = <div id="input-wrapper">
                        <Input placeholder="First Name" className={ ["half-width", firstNameError] }
                            val={ signUpState.userInfo.name.first } handleChange={ updateFirstName } autofocus="true"
                            onclick={ updateFormState } data="name" isError={ isError } onError={ updateShowErrors }
                        />
                        <Input placeholder="Last Name" className={ ["half-width", lastNameError] }
                            val={ signUpState.userInfo.name.last } handleChange={ updateLastName }
                            onclick={ updateFormState } data="congrats" isError={ isError } onError={ updateShowErrors }
                        />
                    </div>;
            button = <Button title="sign up" onclick={ updateFormState } data="congrats" isError={ isError } onError={ updateShowErrors }/>
        }
        else if(signUpState.formState === 'congrats'){
            h1 = <Heading headingType="h1" message={["Congratulations!"]}/>;
            h3 = <Heading headingType="h3" message={["Thank you for", "signing up!"]}/>;
            h4 = <Heading headingType="h4" message={["Look out for the latest news on your favorite shows."]}/>;
        }

        return(
            <div id="sign-up-form-wrapper">
                <div id="sign-up-form" className={ signUpState.formState }>
                    { h1 }
                    <div id="sign-up-form-inner">
                        { h2 }
                        { h3 }
                        { h4 }
                        { input }
                        { button }                       
                        { error }
                        { disclaimer }
                    </div>        
                </div>
            </div>
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