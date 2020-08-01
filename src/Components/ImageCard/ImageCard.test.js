import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ImageCard from './ImageCard';


configure({adapter: new Adapter()})

describe('<ImageCard />', () => {
   it('should render a single img element with a url prop as src', () => {
      const url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png'
      const wrapper = shallow( <ImageCard url={url}/> );
      expect(wrapper.find("img").prop("src")).toEqual(url)
   });

   it('should return null without a url prop', () => {
      const wrapper = shallow( <ImageCard />)
      expect(wrapper.isEmptyRender()).toBe(true)
   })
}) 