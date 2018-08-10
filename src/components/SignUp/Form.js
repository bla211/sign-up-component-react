import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Common/Input';
import Button from '../Common/Button';

class Form extends Component {
    render(){
        const { signUpState } = this.props;
        const { updateEmail } = this.props;
        const { updateFormState } = this.props;
        
        let input, button;
        if(signUpState.formState === 'email'){
            input =  <Input placeholder="enter email address" className="full-width" val={ signUpState.userInfo.email } handleChange={ updateEmail }/>;
            button = <Button title="next" onclick={ updateFormState } data="name"/>
        }
        else if(signUpState.formState === 'name'){
            input =  <div id="input-wrapper">
                        <Input placeholder="First Name" className="half-width"/>
                        <Input placeholder="Last Name" className="half-width"/>
                    </div>;
            button = <Button title="sign up"/>
        }

        return(
            <div id="sign-up-form">
                <h1>Join the list</h1>
                <h2><span class="line">Sign up for</span>&nbsp;<span class="line">the TLC newsletter</span></h2>
                { input }
                { button }        
            </div>
        )
    }

}

Form.propTypes = {
    updateEmail: PropTypes.string,
    updateFormState: PropTypes.string,
    signUpState: PropTypes.object,
  };

export default Form;