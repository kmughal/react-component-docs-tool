import React from "react";
import { Link } from "react-router-dom";

const ExamplesNavigationList = data => {
  const navigationItems = data.map((c, ci) => {
    let i = 1000;
    return (
      <>
        {/* <h1>{c.displayName}</h1>
          <p>{c.description}</p> */}

        <li key={(i++)} className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {c.displayName}
          </a>
          <div key={(i++)} className="dropdown-menu">
            {c.examples.map((e, ei) => {
              let path = `/${c.displayName}/${e.displayName}`;
              return (
                <Link key={(i++)} className="dropdown-item" to={path}>
                  {e.displayName}
                </Link>
              );
            })}
          </div>
        </li>
      </>
    );
  });

  return <ul className="nav"> {navigationItems}</ul>;
};

export default ExamplesNavigationList;
