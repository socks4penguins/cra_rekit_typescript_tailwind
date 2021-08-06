import React from 'react';
import { shallow } from 'enzyme';
import { SpringCard } from '../../../src/features/dev';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<SpringCard />);
  expect(renderedComponent.find('.dev-spring-card').length).toBe(1);
});
