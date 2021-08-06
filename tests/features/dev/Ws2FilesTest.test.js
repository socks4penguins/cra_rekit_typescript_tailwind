import React from 'react';
import { shallow } from 'enzyme';
import { Ws2FilesTest } from '../../../src/features/dev';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Ws2FilesTest />);
  expect(renderedComponent.find('.dev-ws-2-files-test').length).toBe(1);
});
