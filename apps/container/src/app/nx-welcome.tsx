import { useMachine } from '@xstate/react';
import toggleMachine from '../Hooks/machineHook';

interface INxWelcome {
  title: string;
}
export const NxWelcome = (props: INxWelcome) => {
  const [current, send] = useMachine(toggleMachine);
  const active = current.matches('active');
  const { count } = current.context;
  return (
    <div>
      <h1>Hello container</h1>
      <button onClick={() => send({ type: 'TOGGLE' })}>
        {active ? 'Inactive' : 'Active'}
        {count}
      </button>
    </div>
  );
};

export default NxWelcome;
