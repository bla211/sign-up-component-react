import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
    render(){
        const { signUpState } = this.props;
        const { updateEmail } = this.props;
        return(
            <div>
                <input type='text' value={ signUpState.userInfo.email } />
                <button onClick={ () => updateEmail('test@test.com') }>Next</button>
            </div>
        )
    }

}

Form.propTypes = {
    updateEmail: PropTypes.string,
    signUpState: PropTypes.object,
  };

export default Form;