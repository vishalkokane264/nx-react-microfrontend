import { render } from '@testing-library/react';

import NxWelcome from './nx-welcome';

describe('Nx Welcome page', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NxWelcome title="hello title" />);
    expect(baseElement).toBeTruthy();
  });
});
