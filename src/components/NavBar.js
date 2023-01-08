import React from 'react';
import {  Link } from 'react-router-dom';
export const NavBar = () =>{
    return(
<nav>
  <ul>
        {" "}
       <li> 
          <NavLink className="index-link" to={"/"} >
           Index
          </NavLink>
        </li>
        <li>
            <NavLink
            to={"/home"}
            className="home-link">
            Home
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
    
