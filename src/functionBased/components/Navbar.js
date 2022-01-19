import React, { useState } from "react"
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import { NavLink } from "react-router-dom"
const Navbar = ()=>{
    
    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleToggle = () => {
  setNavbarOpen(!navbarOpen)
}

const closeMenu = () => {
  setNavbarOpen(false)
}

const links = [
  {
    id: 1,
    path: "/",
    text: "Home",
  },
  {
    id: 2,
    path: "/about",
    text: "About",
  },
]

return (
  <nav className="navBar">
    <ul>
      {links.map(link => {
        return (
          <li key={link.id}>
            <NavLink to={link.path} activeClassName="active-link" exact>
                {link.text}
                </NavLink>
          </li>
        )
      })}
    </ul>
  </nav>
)
}

export default Navbar