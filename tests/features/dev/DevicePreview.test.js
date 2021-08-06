import React from 'react';
import { shallow } from 'enzyme';
import { DevicePreview } from '../../../src/features/dev';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<DevicePreview />);
  expect(renderedComponent.find('.dev-device-preview').length).toBe(1);
});
