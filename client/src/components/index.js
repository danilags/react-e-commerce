import React from 'react';

import TopNavigation from './TopNavigation';
import Content from './Content';

class Aqua extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <TopNavigation />
        <Content />
      </div>
    )
  }

}

export default Aqua;