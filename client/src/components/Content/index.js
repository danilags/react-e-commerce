import React from 'react';

import Banner from './Banner';
import Item from './Item';

class Content extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div style={{ width: '996px', margin: '0 auto', position: 'relative' }}>
        <Banner />
        <Item />
      </div>
    )
  }

}

export default Content;