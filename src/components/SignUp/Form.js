import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Common/Input';
import Button from '../Common/Button';

class Form extends Component {
    render(){
        const { signUpState, updateEmail, updateFirstName, updateLastName, toggleAgreesToDisclaimer, updateFormState, updateShowErrors } = this.props;
        
        let input, button, h1, h2, h3, h4, disclaimer, errorMessage = '', isError = false, error;
        if(signUpState.formState === 'email'){
            h1 = <h1>Join the list</h1>;
            h2 = <h2>
                    <span class="line">Sign up for</span>&nbsp;<span class="line">the TLC newsletter</span>
                </h2>;
            input = <Input placeholder="enter email address" type="text" className="full-width" val={ signUpState.userInfo.email } handleChange={ updateEmail }/>;
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
            
            if(!regex.test(signUpState.userInfo.email) && !signUpState.userInfo.isAgreesToDisclaimer){
                isError = true;
                errorMessage = '* fields not valid, please check.'
            }
            else if(!regex.test(signUpState.userInfo.email)){
                isError = true;
                errorMessage = '* Please enter a valid email'
            }
            else if(!signUpState.userInfo.isAgreesToDisclaimer){
                isError = true;
                errorMessage = '* You must opt in';
            }

            if(signUpState.showErrors){
                error = <div class="error">{ errorMessage }</div>
            }

            button = <Button title="next" onclick={ updateFormState } data="name" isError={ isError } onError={ updateShowErrors }/>
            disclaimer = <div id="disclaimer">
                            <label class="checkbox-wrapper">
                                <input type="checkbox" checked={ signUpState.userInfo.isAgreesToDisclaimer } onChange={ () => toggleAgreesToDisclaimer() }/>
                                <span class="checkmark"></span>
                            </label>
                            <p class="disclaimer-text">
                                I agree to receive information from Discovery Communications in accordance with the following Privacy Policy
                            </p>
                        </div>
        }
        else if(signUpState.formState === 'name'){
            h1 = <h1>Join the list</h1>;
            h2 = <h2>
                    <span class="line">Almost done! Please enter</span>&nbsp;<span class="line">your first and last name</span>
                </h2>;
            input = <div id="input-wrapper">
                        <Input placeholder="First Name" className="half-width" val={ signUpState.userInfo.name.first } handleChange={ updateFirstName }/>
                        <Input placeholder="Last Name" className="half-width" val={ signUpState.userInfo.name.last } handleChange={ updateLastName }/>
                    </div>;
            button = <Button title="sign up" onclick={ updateFormState } data="congrats" className="margin-bottom_48" onError={ errorMessage }/>
        }
        else if(signUpState.formState === 'congrats'){
            h1 = <h1>Congratulations!</h1>;
            h3 = <h3>
                    <span class="line">Thank you for</span>&nbsp;<span class="line">signing up!</span>
                </h3>;
            h4 = <h4>Look out for the latest news on your favorite shows.</h4>
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