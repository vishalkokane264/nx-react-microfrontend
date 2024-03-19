import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import App from './remote-entry';

describe('Testing remote Entry', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
