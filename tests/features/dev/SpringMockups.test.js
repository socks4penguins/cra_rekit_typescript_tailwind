import React from 'react';
import { shallow } from 'enzyme';
import { SpringMockups } from '../../../src/features/dev';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<SpringMockups />);
  expect(renderedComponent.find('.dev-spring-mockups').length).toBe(1);
});
