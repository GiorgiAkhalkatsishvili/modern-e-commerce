import React, { useEffect, useRef, useState } from 'react'
import './HeaderComponent.css'
import headingText from '../../assets/heading-text.png';
import searchImg from '../../assets/searchImg.png';
import userImg from '../../assets/userImg.png';
import cartImg from '../../assets/cartImg.png';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToggleSearchBar } from '../../Redux/productsSlice';
import sidebarImg from '../../assets/sidebarImg.png'

const HeaderComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const sidebarMenuRef = useRef();

  const openMenu = () => {
    setSidebar(true);
  };

  const closeMenu = () => {
    setSidebar(false);
  };

  useEffect(() => {
  const handleClickOutsideSidebar = (event) => {
    if (sidebarMenuRef.current && !sidebarMenuRef.current.contains(event.target)) {
      setSidebar(false);
    }
  };

  if (sidebar) {
    document.addEventListener('mousedown', handleClickOutsideSidebar);
  } else {
    document.removeEventListener('mousedown', handleClickOutsideSidebar);
  }

  return () => {
    document.removeEventListener('mousedown', handleClickOutsideSidebar);
  };
}, [sidebar]);


  const handleSearchClick = () => {
    dispatch(setToggleSearchBar(true)); 
    navigate('/collection'); 
  };

  return (
    <div className='headerComponent'>
      <div className="header-inner">
        <div className="main-heading-img">
          <Link to='/'><img src={headingText} alt="" /></Link>
        </div>
        <div className="nav-list">
          <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/collection">COLLECTION</Link></li>
         <li><Link to="/about">ABOUT</Link></li>
         <li><Link to="/contact">CONTACT</Link></li>
          </ul>
        </div>
        <div
          ref={sidebarMenuRef}
          className="sidebar-menu"
          style={{
            transform: sidebar ? 'translateX(0rem)' : 'translateX(50rem)',
            transition: 'transform 0.3s ease-in-out',
          }}
        >
          <div className="sidebar-list">
            <div className="closing-svg">
              <svg onClick={closeMenu} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" fill='#374151'/>
              </svg>
            </div>
            <ul>
          <li onClick={closeMenu}><Link to="/">HOME</Link></li>
          <li onClick={closeMenu}><Link to="/collection">COLLECTION</Link></li>
         <li onClick={closeMenu}><Link to="/about">ABOUT</Link></li>
         <li onClick={closeMenu}><Link to="/contact">CONTACT</Link></li>
          </ul>
          </div>
        </div>
        <div className="header-logos">
          <div onClick={handleSearchClick} className="searchImg">
            <img src={searchImg} alt="" />
          </div>
          <div className="userImg">
            <img src={userImg} alt="" />
          </div>
          <div className="cartImg">
            <img src={cartImg} alt="" />
          </div>
          <div className="sidebarImg">
            <img onClick={openMenu} src={sidebarImg} alt="" />
          </div>
        </div>
      </div>
      <div className="border-container">
         <div className="border">
     </div>
     </div>
    </div>
  )
}

export default HeaderComponent
