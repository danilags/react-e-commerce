import React from 'react';

import '../../../assets/style/Content.css';

class Banner extends React.Component {
  constructor(props) {
    super(props)

  }

  render () {
    return (
      <div id="wrap-banner">
        <div className="banner-image">
          <div className="content-banner">
            <p style={{padding:0, margin: 0}}>Welcome</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Banner