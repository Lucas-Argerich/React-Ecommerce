import React, { Component } from 'react'
import { FiSearch } from 'react-icons/fi'
import { BsCart2 } from 'react-icons/bs'
import brandIcon from './brandIcon.svg'
import './index.scss'

export default class NavBar extends Component {
  render() {
    return (
      <nav>

        <div className="navLeft">
          <img src={brandIcon} alt="Brand Icon" />
          <ul>
            <li>
              <a href="">WOMEN</a>
            </li>
            <li>
              <a href="">MEN</a>
            </li>
            <li>
              <a href="">KIDS</a>
            </li>
          </ul>
        </div>

        <div className="navRight">
          <div className="searchContainer">
            <input type="text" placeholder="Search for items" />
            <FiSearch className="fiSearch" />
          </div>
          <BsCart2 className="bsCart2" />
        </div>

      </nav>
    )
  }
}
