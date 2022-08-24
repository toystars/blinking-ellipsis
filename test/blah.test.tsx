import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as DotDotDot } from '../stories/DotDotDot.stories';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DotDotDot />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
