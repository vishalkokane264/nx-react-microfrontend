import { Link } from 'react-router-dom';
export const SideNav = () => {
  return (
    <div className="sidenav-wrapper">
      <ul>
        <li className="list-item">
          <Link to="/">Home</Link>
        </li>

        <li className="list-item">
          <Link to="/child">Child</Link>
        </li>

        <li className="list-item">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};
export default SideNav;