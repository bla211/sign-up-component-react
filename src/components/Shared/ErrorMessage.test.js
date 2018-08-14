import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ErrorMessage from './ErrorMessage';

configure({ adapter: new Adapter() });

describe('Test ErrorMessage component', () => {
    test('Disclaimer renders properly when passed "disclaimerMessage"', () => {
        const errorMessage = "*error message";
        const wrapper = shallow(<ErrorMessage errorMessage={errorMessage}/>);
        expect(wrapper).toMatchSnapshot();
    });
});