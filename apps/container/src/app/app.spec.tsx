import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import App from './app';
import React from 'react';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(getByText(/Hello container/gi)).toBeTruthy();
  });
});

const Child = React.lazy(() => import('child/Module'));
const ChildDashboard = React.lazy(() => import('child/Dashboard'));

const About = React.lazy(() => import('about/Module'));

describe('It should load components lazily', () => {
  it('should pass lazy loading of Child', async () => {
    render(<Child />);
    const textToMatch = await screen.findByText(/Hello child/);
    expect(textToMatch).toBeTruthy();
  });
  it('should pass lazy loading of About', async () => {
    render(<About />);
    const textToMatch = await screen.findByText(/Hello about/);
    expect(textToMatch).toBeTruthy();
  });
  it('should pass lazy loading of Child dashboard', async () => {
    render(<ChildDashboard name={''} />);
    const textToMatch = await screen.findByText(/Welcome to Dashboard/);
    expect(textToMatch).toBeTruthy();
  });
});
