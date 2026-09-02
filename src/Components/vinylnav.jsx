import { Link } from "react-router-dom";
import { useState } from "react";
import "./vinylnav.css";

export function VinylNav() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <div className="panel" />
      <div className={`vinylnav ${showNav ? "active" :""}`}>
        <button type="button" className="disc" onClick={() => setShowNav(!showNav)} />
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
  )
}
