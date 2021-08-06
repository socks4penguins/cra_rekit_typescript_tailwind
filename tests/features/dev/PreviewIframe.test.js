import React from 'react';
import { shallow } from 'enzyme';
import { PreviewIframe } from '../../../src/features/dev';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<PreviewIframe />);
  expect(renderedComponent.find('.dev-preview-iframe').length).toBe(1);
});
