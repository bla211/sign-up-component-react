import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from './Button';

configure({ adapter: new Adapter() });

describe('Test Button component', () => {
    test('Button renders {title}', () => {
        const title = "Next";
        const wrapper = shallow(<Button title={title}/>);
        expect(wrapper).toMatchSnapshot();
    });
    
    test('Button fires onError function on click if "isError === true"', () => {
        const isError = true;
        const onError = jest.fn(); 
        const wrapper = shallow(<Button isError={isError} onError={onError}/>);
        wrapper.find('button').simulate('click');
        expect(onError).toHaveBeenCalled();
    });

    test('Button fires onclick function and passes {data} if no error', () => {
        const isError = false;
        const onclick = jest.fn();
        const data = 'payload'; 
        const wrapper = shallow(<Button isError={isError} onclick={onclick} data={data}/>);
        wrapper.find('button').simulate('click');
        expect(onclick).toHaveBeenCalledWith(data);
    });
});