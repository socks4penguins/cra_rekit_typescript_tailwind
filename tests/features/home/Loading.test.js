import React from 'react';
import { shallow } from 'enzyme';
import { Loading } from '../../../src/features/home';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Loading />);
  expect(renderedComponent.find('.home-loading').length).toBe(1);
});
