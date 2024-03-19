import { Link } from 'react-router-dom';
export const SideNav = () => {
  return (
    <div className="sidenav-wrapper">
      <div className="list-item">
        <Link to="/">Home</Link>
      </div>

      <div className="list-item">
        <Link to="/child1">Child</Link>
      </div>

      <div className="list-item">
        <Link to="/child2">Child Dashboard</Link>
      </div>

      <div className="list-item">
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};
export default SideNav;
