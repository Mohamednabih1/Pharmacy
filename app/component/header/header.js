import Image from 'next/image'
import logo from '../../assets/logo.png'
import email from '../../assets/email.png'
import facebook from '../../assets/facebook.png'
import phone from '../../assets/phone.png'
import profile from '../../assets/profile.png'
import './header.css'
import { FaSearch } from 'react-icons/fa'

// import SearchBar from '../search_bar'
// import { NavigationMenuDemo } from '../navigation_menu'

export function Header() {
  const isMobile = true
  const handleInputChange = (event) => {
    console.log(event.target.value)
    // setSearchTerm(event.target.value)
  }
  return (
    <>
      {isMobile && (
        <div className="Header-top">
          <div className="Header-top-left">
            <div className="hover-3">
              <a href="./location">location</a>
            </div>
            <div className="hover-3">contact us</div>
            <div className="hover-3">see order</div>
          </div>
          <div className="Header-top-right">
            <Image id="header-image" src={email} alt="Amin's Pharmacy" />
            <Image id="header-image" src={facebook} alt="Amin's Pharmacy" />
            <Image id="header-image" src={phone} alt="Amin's Pharmacy" />
            <div className="splitter"></div>
            <div className="hover-3">switch</div>
          </div>
        </div>
      )}
      <div className="Header">
        <div className="left-header">
          <a href="/">
            <Image id="logo-image" src={logo} alt="Amin's Pharmacy" />
          </a>
        </div>
        <div className="center-header">
          <div className="search-box">
            <button className="btn-search">
              <i>
                <center>
                  <FaSearch></FaSearch>
                </center>
              </i>
            </button>
            <input
              type="text"
              className="input-search"
              placeholder="Type to Search..."
              onChange={handleInputChange}
            ></input>
          </div>
        </div>
        <div className="right-header">
          <a className="right-header-content" href="./logging">
            <Image id="profile" src={profile} alt="profile"></Image>
          </a>
        </div>
      </div>
    </>
  )
}
