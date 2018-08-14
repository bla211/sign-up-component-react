import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Form from './Form';

configure({ adapter: new Adapter() });

describe('Test Form component', () => {
    test('Form renders properly when passed props', () => {
        const signUpState = {
            formState: 'email',
            showErrors: false,
            userInfo: {
                email: 'test@test.com',
                name: {
                    first: '',
                    last: ''
                },
                isAgreesToDisclaimer: true
            }
        }
        const wrapper = shallow(<Form signUpState={signUpState}/>);
        expect(wrapper).toMatchSnapshot()
    });

    test('Form renders properly when passed props', () => {
        const signUpState = {
            formState: 'name',
            showErrors: false,
            userInfo: {
                email: 'test@test.com',
                name: {
                    first: 'Test',
                    last: 'Test'
                },
                isAgreesToDisclaimer: true
            }
        }
        const wrapper = shallow(<Form signUpState={signUpState}/>);
        expect(wrapper).toMatchSnapshot()
    });

    test('Form renders properly when passed props', () => {
        const signUpState = {
            formState: 'congrats',
            showErrors: false,
            userInfo: {
                email: 'test@test.com',
                name: {
                    first: 'Test',
                    last: 'Test'
                },
                isAgreesToDisclaimer: true
            }
        }
        const wrapper = shallow(<Form signUpState={signUpState}/>);
        expect(wrapper).toMatchSnapshot()
    });
});