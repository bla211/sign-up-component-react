import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Disclaimer from './Disclaimer';

configure({ adapter: new Adapter() });

describe('Test Disclaimer component', () => {
    test('Disclaimer renders properly when passed "disclaimerMessage"', () => {
        const disclaimerMessage = "message goes here";
        const wrapper = shallow(<Disclaimer disclaimerMessage={disclaimerMessage}/>);
        expect(wrapper).toMatchSnapshot();
    });
});