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
        options = {{ disableDefaultUI: true, zoomControl: true, styles: [
          {
              "elementType": "labels",
              "stylers": [
                  {
                      "visibility": "off"
                  },
                  {
                      "color": "#f49f53"
                  }
              ]
          },
          {
              "featureType": "landscape",
              "stylers": [
                  {
                      "color": "#fff5ec"
                  },
                  {
                      "lightness": 0
                  }
              ]
          },
          {
              "featureType": "road",
              "stylers": [
                  {
                      "color": "#813033"
                  },
                  {
                      "lightness": 43
                  }
              ]
          },
          {
              "featureType": "poi.business",
              "stylers": [
                  {
                      "color": "#645c20"
                  },
                  {
                      "lightness": 38
                  }
              ]
          },
          {
              "featureType": "water",
              "stylers": [
                  {
                      "color": "#1994bf"
                  },
                  {
                      "saturation": -69
                  },
                  {
                      "gamma": 0.99
                  },
                  {
                      "lightness": 43
                  }
              ]
          },
          {
              "featureType": "road.local",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#f19f53"
                  },
                  {
                      "weight": 1.3
                  },
                  {
                      "visibility": "on"
                  },
                  {
                      "lightness": 16
                  }
              ]
          },
          {
              "featureType": "poi.business"
          },
          {
              "featureType": "poi.park",
              "stylers": [
                  {
                      "color": "#645c20"
                  },
                  {
                      "lightness": 39
                  }
              ]
          },
          {
              "featureType": "poi.school",
              "stylers": [
                  {
                      "color": "#a95521"
                  },
                  {
                      "lightness": 35
                  }
              ]
          },
          {},
          {
              "featureType": "poi.medical",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#813033"
                  },
                  {
                      "lightness": 38
                  },
                  {
                      "visibility": "off"
                  }
              ]
          },
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {
              "elementType": "labels"
          },
          {
              "featureType": "poi.sports_complex",
              "stylers": [
                  {
                      "color": "#9e5916"
                  },
                  {
                      "lightness": 32
                  }
              ]
          },
          {},
          {
              "featureType": "poi.government",
              "stylers": [
                  {
                      "color": "#9e5916"
                  },
                  {
                      "lightness": 46
                  }
              ]
          },
          {
              "featureType": "transit.station",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "transit.line",
              "stylers": [
                  {
                      "color": "#813033"
                  },
                  {
                      "lightness": 22
                  }
              ]
          },
          {
              "featureType": "transit",
              "stylers": [
                  {
                      "lightness": 38
                  }
              ]
          },
          {
              "featureType": "road.local",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#f19f53"
                  },
                  {
                      "lightness": -10
                  }
              ]
          },
          {},
          {},
          {}
      ]}}
        margin={[50, 50, 50, 50]}
      >

      </GoogleMapReact>

    </MapContainer>
  )
}

export default Map