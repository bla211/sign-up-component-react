import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Input from './Input';

configure({ adapter: new Adapter() });

describe('Test Input component', () => {
    test('Input renders properly when passed props', () => {
        const placeholder = 'placeholder text';
        const className = ['className'];
        const val = 'value';
        const type = 'text';
        const autofocus = false;
        const wrapper = shallow(<Input placeholder={placeholder} className={className} val={val} type={type} autofocus={autofocus}/>);
        expect(wrapper).toMatchSnapshot()
    });

    test('Input passes input value on input change', () => {
        const handleChange = jest.fn();
        const val = ''; 
        const wrapper = shallow(<Input val={val} handleChange={handleChange}/>);
        wrapper.find('input').simulate('change', { target: { value: 'value' } })
        expect(handleChange).toHaveBeenCalledWith('value');
    });

    test('Input fires onError on enter press if "isError === true"', () => {
        const onError = jest.fn(); 
        const isError = true;
        const wrapper = shallow(<Input onError={onError} isError={isError}/>);
        wrapper.find('input').simulate('keypress', { key: 'Enter', keyCode: 13, which: 13 });
        expect(onError).toHaveBeenCalled();
    });

    test('Input fires onClick function and passes {data} on enter press if "isError === false"', () => {
        const onClick = jest.fn(); 
        const isError = false;
        const data = "payload";
        const wrapper = shallow(<Input onclick={onClick} isError={isError} data={data}/>);
        wrapper.find('input').simulate('keypress', { key: 'Enter', keyCode: 13, which: 13 });
        expect(onClick).toHaveBeenCalledWith(data);
    });
});