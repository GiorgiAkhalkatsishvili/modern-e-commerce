import React, { useEffect, useRef, useState } from 'react'
import './HeaderComponent.css'
import headingText from '../../assets/heading-text.png';
import searchImg from '../../assets/searchImg.png';
import userImg from '../../assets/userImg.png';
import cartImg from '../../assets/cartImg.png';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setToggleSearchBar } from '../../Redux/productsSlice';
import sidebarImg from '../../assets/sidebarImg.png';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { createAccount } from '../../Redux/productsSlice';

const HeaderComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const sidebarMenuRef = useRef();
  const cartItemsArray = useSelector((state) => state.products.cartItems);
  const [signInTab, setSignInTab] = useState(false);
  const dropdownRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [manageAccountOpen, setManageAccountOpen] = useState(false);

  const handleLoginSuccess = (credentialResponse) => {
   const decoded = jwtDecode(credentialResponse.credential); 
   console.log(decoded)
    const userInfo = {
      name: decoded.name,
      imageUrl: decoded.picture,
      email: decoded.email,
    };
    setUser(userInfo);
    setSignInTab(false);
   setDropdownOpen(false);
   dispatch(createAccount(true));
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleGoogleLoginSuccess = (credentialResponse) => {
  handleLoginSuccess(credentialResponse);
  dispatch(createAccount());
  };
  
  const closeAccountTab = () => {
    setManageAccountOpen(false);
  };


  const openAccountFunc = () => {
    setManageAccountOpen(true);
    setDropdownOpen(false);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isTabOpen = () => {
    setSignInTab(!signInTab);
  };

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
          <div className="userImg" onClick={user ? toggleDropdown : isTabOpen}>
            <img src={user ? user.imageUrl : userImg} alt="user" className="profile-img" /></div>
          {dropdownOpen && user && (
            <div className="mainDropDownContainer">
              <div className="dropdown-menu">
                <div className="drop-down-img-texts">
                <img src={user.imageUrl} alt="" />
                  <div className="user-dropDown-name-gmail">
                    <p>{user.name}</p>
                    <div className="user-email-paragraph">
                      <p>{user.email}</p>
                  </div>
                  </div>
                </div>
                <div onClick={openAccountFunc} className="drop-down-settings">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" fill='#5f616b'/></svg>
                  <p>Manage account</p>
                </div>
                <Link to='/cartPage'>
                <div onClick={()=>setDropdownOpen(false)} className="drop-down-cart">
                  <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 0.75H3.75L5.76 10.7925C5.82858 11.1378 6.01643 11.448 6.29066 11.6687C6.56489 11.8895 6.90802 12.0067 7.26 12H14.55C14.902 12.0067 15.2451 11.8895 15.5193 11.6687C15.7936 11.448 15.9814 11.1378 16.05 10.7925L17.25 4.5H4.5M7.5 15.75C7.5 16.1642 7.16421 16.5 6.75 16.5C6.33579 16.5 6 16.1642 6 15.75C6 15.3358 6.33579 15 6.75 15C7.16421 15 7.5 15.3358 7.5 15.75ZM15.75 15.75C15.75 16.1642 15.4142 16.5 15 16.5C14.5858 16.5 14.25 16.1642 14.25 15.75C14.25 15.3358 14.5858 15 15 15C15.4142 15 15.75 15.3358 15.75 15.75Z" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><defs><rect width="18" height="18" fill="white"></rect></defs></svg>
                  <p>Cart</p>
                </div>
                </Link>
                <div onClick={()=>window.location.reload()} className="drop-down-btn">
                  <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path   d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" fill='#5f616b'/></svg> Log out</button>
              </div>
            </div>
              </div>
          )}
          <Link to='/cartPage'>
          <div className="cartImg">
              <img src={cartImg} alt="" />
              <span>{cartItemsArray.length}</span>
          </div>
          </Link>
          <div className="sidebarImg">
            <img onClick={openMenu} src={sidebarImg} alt="" />
          </div>
        </div>
      </div>
      
      {signInTab && <div className="overlay" onClick={isTabOpen}></div>}
      {signInTab &&
          <div className="main-sing-in-tab">
            <div className="singInner">
              <div onClick={() => setSignInTab(false)} className="closing-svg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/>
                </svg>
              </div>
              <h3>Sign in to Forever Ecommerce</h3>
              <p>Welcome back! Please sign in to continue</p>
            </div>
            <div className="main-sing-in-button">
              <GoogleLogin
                onSuccess={handleGoogleLoginSuccess}
                onError={() => console.log("Login Failed")}
                clientId="945811632162-lorogcqeggobnr2rhasfseq0f2oairk9.apps.googleusercontent.com"
              />
            </div>
          </div>
        }
      <div className="border-container">
         <div className="border"></div>
      </div>
      {manageAccountOpen && user ?
      <div className="personal-account-tab">
        <div className="account-first-column">
          <div className="main-headings">
            <h1>Account</h1>
            <p>Manage your account info.</p>
          </div>
          <div className="profile-option">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" class="cl-navbarButtonIcon cl-navbarButtonIcon__account 🔒️ cl-internal-1e71drn"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-2.585 2.894c.154.25.107.568-.083.792A5.675 5.675 0 0 1 8 13.688a5.675 5.675 0 0 1-4.332-2.002c-.19-.224-.237-.543-.083-.792.087-.14.189-.271.306-.392.46-.469 1.087-.986 1.703-1.102.514-.097.899.056 1.298.214.331.132.673.267 1.108.267.435 0 .777-.135 1.108-.267.4-.158.784-.31 1.298-.214.616.116 1.243.633 1.703 1.102.117.12.22.252.306.392ZM8 8.919c1.329 0 2.406-1.559 2.406-2.888a2.406 2.406 0 1 0-4.812 0C5.594 7.361 6.67 8.92 8 8.92Z"></path></svg>
              <p>Profile</p>
            </div>
            <h4>Made by George</h4>
        </div>
        <div className="account-second-column">
          <div className="main-heading">
              <h1>Profile details</h1>
            <svg onClick={()=>setManageAccountOpen(false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" fill='#374151'/>
              </svg>
            <hr />
          </div>
          <div className="profile-info">
              <div className="profile-heading">
                <p>Profile</p>
           </div>
            <div className="user-image">
                <img src={user.imageUrl} alt="" />
                <p>{user.name}</p>
              </div>
              <div className="update-profile">
                <p>Update profile</p>
              </div>
            </div>
            <div className="log-out-option">
              <hr />
              <button onClick={()=>window.location.reload()} >Log out</button>
          </div>
      </div>
        </div>
        : ''}
      {manageAccountOpen && (
        <div className="overlay" onClick={closeAccountTab}></div>
      )}
    </div>
  )
}

export default HeaderComponent
