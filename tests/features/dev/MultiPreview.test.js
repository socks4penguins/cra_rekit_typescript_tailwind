import React from 'react';
import { shallow } from 'enzyme';
import { MultiPreview } from '../../../src/features/dev';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<MultiPreview />);
  expect(renderedComponent.find('.dev-multi-preview').length).toBe(1);
});
