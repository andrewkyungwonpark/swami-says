import React from 'react';

export default function Header(props) {
  return (
    <header>
      <nav>
        <div className="btn-toolbar justify-content-between navbar-header pt-2 pb-5 pl-2 pr-2" role="toolbar" aria-label="Toolbar with btn groups">
          <div className="btn-group mr-2 col col-lg-2 align-right" role="group">
            <button id="home-btn" type="button" className="btn btn-default" onClick={ () => { props.mainMenu('main-menu'); }}>
              <img className="football-img" src="../images/football-icon.png" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
