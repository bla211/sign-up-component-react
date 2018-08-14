import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Input from './Input';

configure({ adapter: new Adapter() });

describe('Test Input component', () => {
    test('Input renders HTML when passed props', () => {
        const placeholder = 'placeholder text';
        const className = ['className'];
        const val = 'value';
        const type = 'text';
        const autofocus = false;
        const wrapper = shallow(<Input placeholder={placeholder} className={className} val={val} type={type} autofocus={autofocus}/>);
        expect(wrapper).toMatchSnapshot()
    });
});