import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import Dashboard from './remote-entry';
describe('Testing remote Entry', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
