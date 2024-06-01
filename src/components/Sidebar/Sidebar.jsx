import { faCode, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useTheme from '../../hooks/useTheme';
import './Sidebar.css';
import StarOnGitHub from './StarOnGitHub';

function Sidebar() {
  const { theme, toogleTheme } = useTheme();
  return (
    <div className="sidebar">
      <div className="header">
        <div className="logo">
          <FontAwesomeIcon icon={faCode} size="2xl" />
        </div>
        <a href="https://find-dev-bd.vercel.app/" className="titlelink">
          <div className="title">
            <p className="dev">Find</p>
            <p className="find">Dev</p>
          </div>
        </a>
        <div className="theme">
          <button type="button" className="theme-button" onClick={toogleTheme}>
            {theme === 'light' ? (
              <FontAwesomeIcon icon={faMoon} fontSize="1rem" />
            ) : (
              <FontAwesomeIcon icon={faSun} fontSize="1rem" />
            )}
          </button>
        </div>
      </div>
      <div className="headline">Discover and Connect with Skilled Developers.</div>
      <div className="description">
        <a
          href=" https://github.com/mdtanvirahamedshanto/FindDevBD#how-to-add-your-profile-data"
          target="_blank"
          rel="noreferrer"
        >
          <button className="link_button"> Add your profile </button>
        </a>
      </div>
      <div className="support">
        <StarOnGitHub />
      </div>
    </div>
  );
}

export default Sidebar;
