import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Index } from '../Pages/Index';
import { Home } from '../Pages/Home';
export const NavBar = () =>{
    return(
<nav>
  <ul>
       <li> <NavLink className="index-link"  to="/">{<Index/>}</NavLink></li>
        <li><NavLink
         to="/home"
         ClassName="home-link">
          {<Home/>}
        </NavLink>
        </li>
        </ul>
</nav>
    )
}
    {/* <NavLink>
        <Link className='index-link' to={"/"}><Index/></Link>
        <Link className='home-link' to={"/home"}><Home/></Link>
    </NavLink> */}
    