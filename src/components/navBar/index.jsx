import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { IoMenuOutline } from 'react-icons/io5'
import { FiSearch } from 'react-icons/fi'
import { BsCart2 } from 'react-icons/bs'
import MediaQuery from 'react-responsive'
import brandIcon from './brandIcon.svg'
import './index.scss'

export default function NavBar() {

  const [brgToggle, setBrgToggle] = useState(false)
  

  return (
    <nav>
      <div className="navLeft">
        <div className={`navLeftTop${brgToggle ? " showMenu" : ""}`}>
          <IoMenuOutline className="fiMenu" onClick={() => setBrgToggle(!brgToggle)} />
          <img src={brandIcon} alt="Brand Icon" />
        </div>
        <div className="navLeftBottom">
          <ul>
            <li>
              <Link to="React-Ecommerce/women">WOMEN</Link>
            </li>
            <li>
              <Link to="React-Ecommerce/men">MEN</Link>
            </li>
            <li>
              <Link to="React-Ecommerce/kids">KIDS</Link>
            </li>
          </ul>
        </div>
      </div>

      { !brgToggle &&(<div className="navRight">
        <div className="searchContainer">
          <input type="text" placeholder="Search for items" />
          <FiSearch className="fiSearch" />
        </div>
        <MediaQuery minWidth={768}>
          <BsCart2 className="bsCart2" />
        </MediaQuery>
      </div>)}

    </nav>
  )
}
