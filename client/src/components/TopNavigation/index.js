import React from 'react';

import '../../assets/style/Topnav.css';

class TopNavigation extends React.Component {
  constructor(props) {
    super(props)

  }

  render () {
    return (
      <div id="wrap-nav">
        <div className="top-nav">
          <span className="logo">Logo</span>
          <span className="segments">
            <ul>
              <li>Wanita</li>
              <li>Pria</li>
            </ul>
          </span>
          <span className="search-bar">
            <input type="text" placeholder="search"></input>
          </span>
          <span className="user-profile">
            <ul>
              <li><a href="">Profile</a></li>
              <li><a href="">Favorite</a></li>
              <li><a href="">Keranjang</a></li>
            </ul>
          </span>
        </div>

        <div className="bottom-nav">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Home</a></li>
            <li><a href="">Home</a></li>
            <li><a href="">Home</a></li>
            <li><a href="">Home</a></li>
          </ul>
        </div>
      </div>
    )
  }

}

export default TopNavigation;