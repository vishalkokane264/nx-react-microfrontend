import { useEffect, useState } from 'react';
interface IDashboard {
  name: string;
}

export const Dashboard = ({ name }: IDashboard) => {
  const [userName, setUserName] = useState<string>('sample');

  useEffect(() => {
    setUserName(name);
  }, [name]);
  console.log('dashboard props', name);
  return (
    <div>
      <div style={{ color: 'red', fontSize: '20px' }}>
        This page states how to pass props from parent container to child
        application
      </div>
      <h1 style={{ color: 'greens' }}>Hello User: {userName}</h1>
      <h2 style={{ color: 'red' }}>Welcome to Dashboard</h2>
    </div>
  );
};
export default Dashboard;
