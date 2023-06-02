/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import propTypes from "prop-types";

export default function NavBar(prop) {
  return (
    <div>
      <div classNameName="App">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              {prop.title}
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              {prop.about}
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Separated link
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link disabled
    "
            >
              Disabled
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

NavBar.propTypes = {
  title: propTypes.string.isRequired,
  about: propTypes.string.isRequired,
};

NavBar.defaultProps = {
  title: "place logo here",
  about: "write about us text"
}