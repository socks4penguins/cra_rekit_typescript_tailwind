import React from 'react';
import { shallow } from 'enzyme';
import { Preview } from '../../../src/features/dev';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Preview />);
  expect(renderedComponent.find('.dev-preview').length).toBe(1);
});
