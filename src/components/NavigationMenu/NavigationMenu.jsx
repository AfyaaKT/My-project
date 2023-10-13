import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationMenu.css'
const NavigationMenu = () => {
  const Sections = [
    { path: "/", name: "Home" },
    { path: "/products", name: "Products" },
    { path: "/about", name: "About Us" },
    { path: "/favorites", name: "Favorites" },
  ];

  return (
    <div className='navBar'>
     
      <div className='nav-elm'>
        {Sections.map((section) => (
          <NavLink
            to={section.path}
            className={(navData) =>
                navData.isActive
                 ? 'active-link'
                 : 'nav-elm'
               }
              >

           
            {section.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default NavigationMenu;