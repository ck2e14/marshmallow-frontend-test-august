import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DragonsContainer from './DragonsContainer.js';
import DragonCard from './DragonCard/DragonCard'


configure({adapter: new Adapter()})

describe('<DragonsContainer />', () => {
   const wrapper = shallow( <DragonsContainer  /> )
   it('renders', () => {
      expect(wrapper.exists()).toBe(true)
   });

}) 