import React from 'react';
import GoogleMapReact from 'google-map-react';
import pinImage from './pin.svg';

const PinWidget = () => (
  <img src={pinImage} alt="Pin" style={{ width: '30px', height: '30px' }} />
);

const AnyReactComponent = ({ text }) => (
  <div style={{ position: 'relative', textAlign: 'center', fontWeight: 'bold', color: 'blue' }}>
    <PinWidget />
    <div style={{ display: 'inline-block', marginLeft: '5px', fontSize: '18px' }}>
      {text}
    </div>
  </div>
);

const Map = () => {
  const defaultProps = {
    center: {
      lat: 19.228825,
      lng: 72.854118
    },
    zoom: 11
  };

  const markers = [
    { lat: 19.2183, lng: 72.9781, text: 'Tata_Altroz' },
    { lat: 19.234543, lng: 72.846543, text: 'Hyundai_i20' },
    { lat: 19.1874, lng: 72.8484, text: 'Skoda_Slavia' },
    { lat: 19.1254, lng: 72.9992, text: 'MG_Astor' }
  ];

  const renderedMarkers = markers.map((marker, index) => (
    <AnyReactComponent key={index} lat={marker.lat} lng={marker.lng} text={marker.text} />
  ));

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCFoUQrvJ0X6qrvlfW4EZIs_4LYs-RpDn4' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {renderedMarkers}
      </GoogleMapReact>
    </div>
  );
}

export default Map;
