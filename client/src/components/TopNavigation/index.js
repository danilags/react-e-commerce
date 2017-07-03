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
          <div className="deep-nav">
            <span className="logo seg-bar">Logo</span>
            <span className="segments seg-bar">
              <ul>
                <li>Wanita</li>
                <li>Pria</li>
              </ul>
            </span>
            <span className="search-bar seg-bar">
              <input type="text" placeholder="search"></input>
            </span>
            <span className="user-profile seg-bar">
              <ul>
                <li><a href="">Profile</a></li>
                <li><a href="">Favorite</a></li>
                <li><a href="">Keranjang</a></li>
              </ul>
            </span>
          </div>
        </div>

        <div className="bottom-nav">
          <ul>
            <li><a href="">TERBARU</a></li>
            <li><a href="">PAKAIAN</a></li>
            <li><a href="">SEPATU</a></li>
            <li><a href="">TAS</a></li>
            <li><a href="">JAM TANGAN</a></li>
          </ul>
        </div>
      </div>
    )
  }

}

export default TopNavigation;