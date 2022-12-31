import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Index } from '../Pages/Index';
import { Home } from '../Pages/Home';
export const NavBar = () =>{
    return(
<nav>

        <NavLink className="index-link"  to="/">{<Index/>}</NavLink>
        <NavLink
         to="/home"
         ClassName="home-link">
          {<Home/>}
        </NavLink>
</nav>
    )
}
    {/* <NavLink>
        <Link className='index-link' to={"/"}><Index/></Link>
        <Link className='home-link' to={"/home"}><Home/></Link>
    </NavLink> */}
    