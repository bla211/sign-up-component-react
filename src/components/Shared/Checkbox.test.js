import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Checkbox from './Checkbox';

configure({ adapter: new Adapter() });

describe('Test Checkbox component', () => {
    test('Checkbox renders properly when passed "isChecked === true"', () => {
        const isChecked = true;
        const wrapper = shallow(<Checkbox isChecked={isChecked}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('Checkbox renders properly when passed "isChecked === false"', () => {
        const isChecked = false;
        const wrapper = shallow(<Checkbox isChecked={isChecked}/>);
        expect(wrapper).toMatchSnapshot();
    });
});