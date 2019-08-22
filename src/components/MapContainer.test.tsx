import React from 'react';
import { shallow } from 'enzyme'
import MapContainer from './MapContainer'

describe('map component tests', () => {
    it('renders without crash', () => {
        const wrapper = shallow(<MapContainer/>);
        expect(wrapper.find('#MapContainer-test')).toHaveLength(1);
    })
})