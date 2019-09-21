import React from "react";
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className="nav-background">
      <ul className="nav-ul">
        <li>
          <Link to={'/dashboard'} className="nav-links"> Dashboard </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
