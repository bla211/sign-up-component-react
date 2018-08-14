import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Heading from './Heading';

configure({ adapter: new Adapter() });

describe('Test Heading component', () => {
    test('Heading renders properly when passed {headingType} and no message', () => {
        const headingType = 'h1';
        const message = [];
        const wrapper = shallow(<Heading headingType={headingType} message={message}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('Heading renders properly when passed {headingType} and a one line nessage', () => {
        const headingType = 'h1';
        const message = ['message 1'];
        const wrapper = shallow(<Heading headingType={headingType} message={message}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('Heading renders properly when passed {headingType} and a two line nessage', () => {
        const headingType = 'h1';
        const message = ['message 1', 'message 2'];
        const wrapper = shallow(<Heading headingType={headingType} message={message}/>);
        expect(wrapper).toMatchSnapshot();
    });
});