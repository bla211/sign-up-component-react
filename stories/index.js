import React from 'react';
import { storiesOf } from '@storybook/react';
import { updateEmail } from '../src/actions/signUpActions';
import  PureForm  from '../src/components/SignUp/PureForm';
import '../public/dist/bundle.css';
import '../public/dist/fonts/stylesheet.css';

const signUpState = {
  formState: 'email',
    showErrors: false,
    userInfo: {
        email: '',
        name: {
            first: '',
            last: ''
        },
        isAgreesToDisclaimer: true
    }
}

storiesOf('TaskList', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('default', () => <PureForm signUpState={ signUpState } updateEmail={ updateEmail }/>)