import React, { useEffect, useState, useRef } from 'react'
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components'
import GoogleMap from 'google-maps-react-markers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const MapContainer = styled.div`
  height: 450px;
  box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.4);
  top: 100px;
  position: relative;

`

const MarkerContainer = styled.div`
    height: 50px;
    width: 50px;
    position: relative;
    background-color: #000000;

`

const MarkerText = styled.p`
    color: #9b111e;
    text-shadow: 1px 2px 10px #777777;
    font-size: 20px;
    font-weight: 700;

`

const Marker = ({ text }) => (
    <div
      style={{
        position: "absolute",
        transform: "translate(-50%, -100%)", // Center the marker horizontally and move it up above the coordinate point
        color: "#9b111e",
        textAlign: "center",
        width: "120px",
        display: 'flex',
        flexDirection:'column'
      }}
    >
        <MarkerText>{text}</MarkerText>
        <i style={{
            fontSize: 30,
            }} class="fa-solid fa-location-dot"></i> 
        </div>
  );

const Map = ({ setBounds, coordinates, setCoordinates, places, currentLocation }) => {

    // const [coordinates, setCoordinates] = useState({});
    const [markers, setMarkers] = useState([]);
    const [userMarker, setUserMarker] = useState({});
    const mapRef = useRef(null)
    const [mapReady, setMapReady] = useState(false)
    //const [currentLocation, setCurrentLocation] = useState({});
    console.log(coordinates)

    console.log(currentLocation, "current location")
    const onGoogleApiLoaded = ({ map, maps }) => {
        mapRef.current = map
        setMapReady(true)
      }

    const formattedMarkers = places.map((place, index) => ({
        name: place.restaurantName,
        lat: place.latitude,
        lng: place.longitude,
    }));


    useEffect(() => {
    
        setMarkers(formattedMarkers);
    }, [places]);

    
return (

      
    <MapContainer>

      <GoogleMap
        apiKey="AIzaSyDZaDr8KY4EcksgJ5mVXyknwF6OY2eGNuo"
        defaultCenter={currentLocation}
        center={coordinates}
        defaultZoom={16}
        onGoogleApiLoaded={onGoogleApiLoaded}
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

      >

        {formattedMarkers.map((marker, index) => (
                              <Marker
                              text={marker.name}
                              lat={marker.lat}
                              lng={marker.lng}
                            ></Marker>
        ))}
      </GoogleMap>

    </MapContainer>
  )
}

export default Map