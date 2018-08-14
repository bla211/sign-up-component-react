import React from 'react';
import { storiesOf } from '@storybook/react';
import { actions, action } from '@storybook/addon-actions';
import  Form  from '../src/components/SignUp/Form';
import '../public/dist/bundle.css';
import '../public/dist/fonts/stylesheet.css';

const initialEmailState = { formState: 'email', showErrors: false, userInfo: { email: '', name: { first: '', last: ''}, isAgreesToDisclaimer: true}}
const invalidEmail = { formState: 'email', showErrors: true, userInfo: { email: '', name: { first: '', last: ''}, isAgreesToDisclaimer: true}}
const notOpted = { formState: 'email', showErrors: true, userInfo: { email: 'brad.louis.alexander@gmail.com', name: { first: '', last: ''}, isAgreesToDisclaimer: false}}
const invalidEmailNotOpted = { formState: 'email', showErrors: true, userInfo: { email: '', name: { first: '', last: ''}, isAgreesToDisclaimer: false}}
const validEmailOpted = { formState: 'email', showErrors: false, userInfo: { email: 'brad.louis.alexander@gmail.com', name: { first: '', last: ''}, isAgreesToDisclaimer: true}}

const initialNameState = { formState: 'name', showErrors: false, userInfo: { email: 'brad.louis.alexander@gmail.com', name: { first: '', last: ''}, isAgreesToDisclaimer: true}}
const invalidFirstLast = { formState: 'name', showErrors: true, userInfo: { email: 'brad.louis.alexander@gmail.com', name: { first: '', last: ''}, isAgreesToDisclaimer: true}}
const validFirstInvalidLast = { formState: 'name', showErrors: true, userInfo: { email: 'brad.louis.alexander@gmail.com', name: { first: 'Brad', last: ''}, isAgreesToDisclaimer: true}}
const invalidFirstValidLast = { formState: 'name', showErrors: true, userInfo: { email: 'brad.louis.alexander@gmail.com', name: { first: '', last: 'Alexander'}, isAgreesToDisclaimer: true}}
const validFirstLast = { formState: 'name', showErrors: false, userInfo: { email: 'brad.louis.alexander@gmail.com', name: { first: 'Brad', last: 'Alexander'}, isAgreesToDisclaimer: true}}

const congratulationsState = { formState: 'congrats', showErrors: false, userInfo: { email: 'brad.louis.alexander@gmail.com', name: { first: 'Brad', last: 'Alexander'}, isAgreesToDisclaimer: true}}


storiesOf('Sign Up Form', module)
  .add('Initial Email State', () => <Form signUpState={ initialEmailState } updateFormState={ action('updateFormState') } updateShowErrors={ action('updateShowErrors') } updateEmail={ action('updateEmail')} toggleAgreesToDisclaimer={ action('toggleAgreesToDisclaimer')}/>)
  .add('Invalid Email and Not Opted', () => <Form signUpState={ invalidEmailNotOpted } updateFormState={ action('updateFormState') } updateShowErrors={ action('updateShowErrors') } updateEmail={ action('updateEmail')} toggleAgreesToDisclaimer={ action('toggleAgreesToDisclaimer')}/>)
  .add('Invalid Email and Opted', () => <Form signUpState={ invalidEmail } updateFormState={ action('updateFormState') } updateShowErrors={ action('updateShowErrors') } updateEmail={ action('updateEmail')} toggleAgreesToDisclaimer={ action('toggleAgreesToDisclaimer')}/>)
  .add('Valid Email and Not Opted', () => <Form signUpState={ notOpted } updateFormState={ action('updateFormState') } updateShowErrors={ action('updateShowErrors') } updateEmail={ action('updateEmail')} toggleAgreesToDisclaimer={ action('toggleAgreesToDisclaimer')}/>)
  .add('Valid Email and Opted', () => <Form signUpState={ validEmailOpted } updateFormState={ action('updateFormState') } updateShowErrors={ action('updateShowErrors') } updateEmail={ action('updateEmail')} toggleAgreesToDisclaimer={ action('toggleAgreesToDisclaimer')}/>)

  .add('Initial Name State', () => <Form signUpState={ initialNameState } updateFormState={ action('updateFormState') } updateShowErrors={ action('updateShowErrors') } updateFirstName={ action('updateFirstName')} updateLastName={ action('updateLastName')}/>)
  .add('Invalid First and Last', () => <Form signUpState={ invalidFirstLast } updateFormState={ action('updateFormState') } updateShowErrors={ action('updateShowErrors') } updateEmail={ action('updateEmail')} toggleAgreesToDisclaimer={ action('toggleAgreesToDisclaimer')}/>)
  .add('Valid First and Invalid Last', () => <Form signUpState={ validFirstInvalidLast } updateFormState={ action('updateFormState') } updateShowErrors={ action('updateShowErrors') } updateEmail={ action('updateEmail')} toggleAgreesToDisclaimer={ action('toggleAgreesToDisclaimer')}/>)
  .add('Invalid First and Valid Last', () => <Form signUpState={ invalidFirstValidLast } updateFormState={ action('updateFormState') } updateShowErrors={ action('updateShowErrors') } updateEmail={ action('updateEmail')} toggleAgreesToDisclaimer={ action('toggleAgreesToDisclaimer')}/>)
  .add('Valid First and Last', () => <Form signUpState={ validFirstLast } updateFormState={ action('updateFormState') } updateShowErrors={ action('updateShowErrors') } updateEmail={ action('updateEmail')} toggleAgreesToDisclaimer={ action('toggleAgreesToDisclaimer')}/>)

  .add('Congratulations!', () => <Form signUpState={ congratulationsState }/>)