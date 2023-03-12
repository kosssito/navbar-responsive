import { useState } from 'react';
import '../styles/navBar.css'

const NavBar = () => {

  const [state, setState] = useState({
    icon: "bx bx-menu",
    navBar: "navbar",
    box: "nav-bg"
  })

 const handleClick = ()=>{
  if(state.icon === "bx bx-menu")
 return setState({
    ...state,
    icon: "bx bx-x",
    navBar: "navbar active",
    box: "nav-bg active"
  })
 return setState({
    ...state,
    icon: "bx bx-menu",
    navBar: "navbar",
    box: "nav-bg"
  })

 }

  return (
    <>
      <header className="header">
        <a href="#" className="logo">Logo</a>
        <i class={state.icon} id='menu-icon' onClick={handleClick}></i>

        <nav className={state.navBar}>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Portfolio</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
        </nav>
      </header>
      <div className={state.box}></div>
    </>
  );
};

export default NavBar;
