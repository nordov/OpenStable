import React from 'react';
import './cities.css';
import BayAreaCarousel from "../bayarea_stables/bayarea_stables_carousel";

class Cities extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <BayAreaCarousel />
      </div>
    )
  }
}

export default Cities;