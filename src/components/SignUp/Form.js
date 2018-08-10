import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Common/Input';
import Button from '../Common/Button';

class Form extends Component {
    render(){
        const { signUpState } = this.props;
        const { updateEmail } = this.props;
        const { updateFirstName } = this.props;
        const { updateLastName } = this.props;
        const { toggleAgreesToDisclaimer } = this.props;
        const { updateFormState } = this.props;
        
        let input, button, h1, h2, h3, h4, disclaimer;
        if(signUpState.formState === 'email'){
            h1 = <h1>Join the list</h1>;
            h2 = <h2>
                    <span class="line">Sign up for</span>&nbsp;<span class="line">the TLC newsletter</span>
                </h2>;
            input = <Input placeholder="enter email address" type="email" className="full-width" val={ signUpState.userInfo.email } handleChange={ updateEmail }/>;
            button = <Button title="next" onclick={ updateFormState } data="name"/>
            disclaimer = <div id="disclaimer">
                            <label class="checkbox-wrapper">
                                <input type="checkbox" value={ signUpState.userInfo.isAgreeToDisclaimer } onChange={ () => toggleAgreesToDisclaimer() }/>
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
            button = <Button title="sign up" onclick={ updateFormState } data="congrats"/>
        }
        else if(signUpState.formState === 'congrats'){
            h1 = <h1>Congratulations!</h1>;
            h3 = <h3>
                    <span class="line">Thank you for</span>&nbsp;<span class="line">signing up!</span>
                </h3>;
            h4 = <h4>Look out for the latest news on your favorite shows.</h4>
        }

        return(
            <div id="sign-up-form">
                { h1 }
                { h2 }
                { h3 }
                { h4 }
                { input }
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
    toggleAgreesToDisclaimer: PropTypes.string
  };

export default Form;