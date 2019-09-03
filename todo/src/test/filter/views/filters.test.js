import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Filters} from '../../../filter/';
import Link from '../../../filter/views/link';
import {FilterTypes} from '../../../constants';

configure({ adapter: new Adapter() });
describe('filters', () => {
    it('should render three link', () => {
        const wrapper = shallow(<Filters />);
        
        expect(wrapper.contains(<Link filter={FilterTypes.ALL}> {FilterTypes.ALL} </Link>)).toBe(true);
        expect(wrapper.contains(<Link filter={FilterTypes.COMPLETED}> {FilterTypes.COMPLETED} </Link>)).toBe(true);
        expect(wrapper.contains(<Link filter={FilterTypes.UNCOMPLETED}> {FilterTypes.UNCOMPLETED} </Link>)).toBe(true);
    })
})