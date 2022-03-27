import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  let location = useLocation();

  return (
    <div>
      전진호
      <nav>
        <Link to="/">Home</Link> | <Link to="/Todo">Todo</Link> |{" "}
        <Link to="/Movie">Movie</Link>
      </nav>
    </div>
  );
}

export default Header;
