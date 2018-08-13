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
        if(signUpState.formState === 'email'){
            h1 = <Heading headingType="h1" message={["Join the list"]}/>;
            h2 = <Heading headingType="h2" message={ ["Sign up for", "the TLC newsletter"] }/>;
            input = <Input placeholder="enter email address" type="text" className="full-width" val={ signUpState.userInfo.email } handleChange={ updateEmail }/>;
            
            const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            let isValidEmail = emailRegex.test(signUpState.userInfo.email);            
            if(!isValidEmail && !signUpState.userInfo.isAgreesToDisclaimer){
                isError = true;
                errorMessage = '* fields not valid, please check.'
            }
            else if(!isValidEmail){
                isError = true;
                errorMessage = '* Please enter a valid email'
            }
            else if(!signUpState.userInfo.isAgreesToDisclaimer){
                isError = true;
                errorMessage = '* You must opt in';
            }

            if(signUpState.showErrors){
                error = <ErrorMessage errorMessage={ errorMessage }/>
            }

            button = <Button title="next" onclick={ updateFormState } data="name" isError={ isError } onError={ updateShowErrors }/>
            disclaimer = <Disclaimer isChecked={ signUpState.userInfo.isAgreesToDisclaimer } toggleChecked={ toggleAgreesToDisclaimer }/>
        }
        else if(signUpState.formState === 'name'){
            h1 = <Heading headingType="h1" message={["Join the list"]}/>;
            h2 = <Heading headingType="h2" message={["Almost done! Please enter", "your first and last name"]}/>;
            input = <div id="input-wrapper">
                        <Input placeholder="First Name" className="half-width" val={ signUpState.userInfo.name.first } handleChange={ updateFirstName }/>
                        <Input placeholder="Last Name" className="half-width" val={ signUpState.userInfo.name.last } handleChange={ updateLastName }/>
                    </div>;
            button = <Button title="sign up" onclick={ updateFormState } data="congrats" className="margin-bottom_48" onError={ errorMessage }/>
        }
        else if(signUpState.formState === 'congrats'){
            h1 = <Heading headingType="h1" message={["Congratulations"]}/>;
            h3 = <Heading headingType="h3" message={["Thank you for", "signing up!"]}/>;
            h4 = <Heading headingType="h4" message={["Look out for the latest news on your favorite shows."]}/>;
        }

        return(
            <div id="sign-up-form" class={ signUpState.formState }>
                { h1 }
                { h2 }
                { h3 }
                { h4 }
                { input }
                { error }
                { button }
                { disclaimer }        
            </div>
        )
    }

}

Form.propTypes = {
    updateEmail: PropTypes.string,
    updateFirstName: PropTypes.string,
    updateLastName: PropTypes.string,
    updateFormState: PropTypes.string,
    signUpState: PropTypes.object,
    toggleAgreesToDisclaimer: PropTypes.string,
    updateShowErrors: PropTypes.string
  };

export default Form;