import React from 'react';
import { shallow } from 'enzyme'
import {LandingPage} from './LandingPage'

describe('landing page tests', () => {
    it('renders without crash', () => {
        const wrapper = shallow(<LandingPage/>);
        expect(wrapper.find('#LandingPage-test')).toHaveLength(1);
    })
})