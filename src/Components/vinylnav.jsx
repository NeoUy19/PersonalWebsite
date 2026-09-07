import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./vinylnav.css";

export function VinylNav() {
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShowNav(false);
  }, [location]);
  return (
    <>
      {/* <div className="panel" /> */}
      <rect className="DiscHolder"></rect>
      <div className={`vinylnav ${showNav ? "active" : ""}`}>
        <button
          type="button"
          className="disc"
          onClick={() => setShowNav((prev) => !prev)}
        />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutme">About Me</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
