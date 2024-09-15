import React, { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components'

const MapContainer = styled.div`
  height: 450px;
  box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.4);
  top: 100px;
  position: relative;

`
const Map = () => {

  const [coordinates, setCoordinates] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
      setCoordinates({lat: latitude, lng: longitude});
    })
  }, []);

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