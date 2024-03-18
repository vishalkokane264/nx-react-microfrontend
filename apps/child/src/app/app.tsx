// eslint-disable-next-line @typescript-eslint/no-unused-vars

import NxWelcome from './nx-welcome';

interface IApp {
  name: string;
}

export function App() {
  return (
    <div>
      <NxWelcome title="child" />
    </div>
  );
}

export default App;
