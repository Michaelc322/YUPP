import React from 'react'
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components'

const MapContainer = styled.div`
  height: calc(100vh - 100px);
  width: 100%;
`
const Map = () => {

  const coordinates = { lat: 0, lng: 0 } 

  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDZaDr8KY4EcksgJ5mVXyknwF6OY2eGNuo' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
      >

      </GoogleMapReact>

    </MapContainer>
  )
}

export default Map