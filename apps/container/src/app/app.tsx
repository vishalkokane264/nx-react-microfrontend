import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const Child: any = React.lazy(() => import('child/Module'));

const ChildDashboard: any = React.lazy(() => import('child/Dashboard'));

const About = React.lazy(() => import('about/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/child">Child</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="container" />} />
        <Route path="/child" element={<ChildDashboard name={'vishal'} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
