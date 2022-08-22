import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function DesktopNavbar(props: { links: string[][] }) {
  const { links } = props;

  var desktopLinks = [...links];

  // Remove  home page link and assign to variable
  const homeLink = desktopLinks.shift();

  // Remaining pages
  const pages = desktopLinks;

  return (
    <div className="hidden md:block">
      <div className={`border-b`}>
        <div className="container grid grid-flow-col-dense lg:grid-cols-3 items-baseline py-6">
          <div>
            <NavLink className="text-2xl font-serif font-bold" to={homeLink[0]}>
              {homeLink[1]}
            </NavLink>
          </div>
          <div className="justify-self-center flex flex-row items-center gap-8">
            {pages.map((link) => {
              const linkPath = link[0];
              const linkName = link[1];

              return (
                <NavLink
                  className="font-bold hover:opacity-75"
                  key={linkName}
                  to={linkPath}
                >
                  {linkName}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopNavbar;
