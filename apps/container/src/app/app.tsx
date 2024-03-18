import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const Child = React.lazy(() => import('child/Module'));

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
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="container" />} />

        <Route path="/child" element={<Child />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
