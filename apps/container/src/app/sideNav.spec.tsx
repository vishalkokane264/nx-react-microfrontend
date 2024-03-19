import { render } from '@testing-library/react';

import SideNav from './sideNav';
import { BrowserRouter } from 'react-router-dom';

describe('Sidenav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <SideNav />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
