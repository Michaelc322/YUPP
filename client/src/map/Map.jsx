import React, { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components'


const MapContainer = styled.div`
  height: 450px;
  box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.4);
  top: 100px;
  position: relative;

`

const MarkerContainer = styled.div`
    height: 50px;
    width: 50px;
    position: absolute;
    background-color: #fff;

`

const Map = ({ setBounds, coordinates, setCoordinates, places }) => {

    // const [coordinates, setCoordinates] = useState({});
    const [markers, setMarkers] = useState([]);
    const [userMarker, setUserMarker] = useState({});
  return (

    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDZaDr8KY4EcksgJ5mVXyknwF6OY2eGNuo' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={16}
        onChange={(e) => {
            setCoordinates({lat: e.center.lat, lng: e.center.lng});
            setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw});
        }}

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
        {places?.map((place, i) => (
            <MarkerContainer
                lat={place.lat}
                lng={place.lng}
                key={i}
            >
                <h1>{place.latitude}</h1>

            </MarkerContainer>
        ))}

      </GoogleMapReact>

    </MapContainer>
  )
}

export default Map