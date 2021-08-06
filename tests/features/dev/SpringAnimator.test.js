import React from 'react';
import { shallow } from 'enzyme';
import { SpringAnimator } from '../../../src/features/dev';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<SpringAnimator />);
  expect(renderedComponent.find('.dev-spring-animator').length).toBe(1);
});
