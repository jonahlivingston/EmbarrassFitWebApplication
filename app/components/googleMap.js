
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';



export class SimpleMap extends Component {
  

  render() {
    const AnyReactComponent = ({ yo }) => <div>{yo}</div>
    return (
      <GoogleMapReact
        center={[59.95,30.33]}
        defaultZoom={11}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text={'test'}
        />
      </GoogleMapReact>

    );
  }
}