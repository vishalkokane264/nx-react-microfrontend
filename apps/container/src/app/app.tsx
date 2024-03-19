import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Route, Routes } from 'react-router-dom';
import SideNav from './sideNav';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Child: any = React.lazy(() => import('child/Module'));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ChildDashboard: any = React.lazy(() => import('child/Dashboard'));

const About = React.lazy(() => import('about/Module'));

export function App() {
  return (
    <div className="container-wrapper">
      <React.Suspense fallback={null}>
        <div className="container-sidebar">
          <SideNav />
        </div>
        <div className="container-body">
          <Routes>
            <Route path="/" element={<NxWelcome title="container" />} />
            <Route path="/child1" element={<Child />} />
            <Route
              path="/child2"
              element={<ChildDashboard name={'santosh'} />}
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </React.Suspense>{' '}
    </div>
  );
}

export default App;
