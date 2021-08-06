import React from 'react';
import { shallow } from 'enzyme';
import { SpringGesture } from '../../../src/features/dev';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<SpringGesture />);
  expect(renderedComponent.find('.dev-spring-gesture').length).toBe(1);
});
