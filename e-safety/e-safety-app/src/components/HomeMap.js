import 'mapbox-gl/dist/mapbox-gl.css'
import * as React from 'react';
import { useState } from 'react';
import ReactMapGl,{Marker, Popup} from 'react-map-gl';
import ReactMapGL from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

const MAPBOX_TOKEN = 'pk.eyJ1IjoiZnV3YWswbzAiLCJhIjoiY2wydnFydGZxMGVqNTNkb2EwN2ZkNHcxdyJ9.UztIdH-2TQS0MtVez1xznA'

export default function HomeMap(props) {
  const [viewport, setViewport] = useState({
    latitude: 47.662777,
    longitude: -122.313877,
    zoom: 14
  });
  const [selectedMarker, setSelectedMarker] = useState(null);
  console.log(props.markerinfo);
  const incidentMarkers = props.markerinfo;

  const handleMarkerClick = function (marker) {
    setSelectedMarker(
      marker
    )
  }

  const handleClose = function () {
    setSelectedMarker(
      null
    )
  }

  if (!incidentMarkers){
    console.log("yes!");
    return (
    <div style={{ height: "66vh" }}>
    <ReactMapGL
      {...viewport}
      width="100%"
      height="100%"
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapboxApiAccessToken={MAPBOX_TOKEN}
      mapStyle="mapbox://styles/fuwak0o0/cl2vqyhwn000n14tgci6txwby"
    />
    </div>
    );
  }
  else{return (
    <div style={{ height: "66vh" }}>
    <ReactMapGl
      {...viewport}
      width="100%"
      height="100%"
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapboxApiAccessToken={MAPBOX_TOKEN}
      mapStyle="mapbox://styles/fuwak0o0/cl2vqyhwn000n14tgci6txwby"
    >
    {incidentMarkers.map((marker, idx) => {
      if(marker.Type === "Crime" || marker.Type ==="Drug Activity"){
        console.log(marker.Type);
        return (
          <Marker
            key={idx}
            latitude={marker.Lat}
            longitude={marker.Long}
            onClick={() => handleMarkerClick(marker)}
            offsetLeft={-10}
            offsetTop={-25}
          >
         <img id="reportMarker" src={process.env.PUBLIC_URL + 'img/pin-purple.png'} width="20" height="30" alt="marker"/>
          </Marker>
        );
      }else if (marker.Type === "Yelling/Verbal Aggression" || marker.Type === "Suspicious Individuals"){
        console.log(marker.Type);
        return (
          <Marker
            key={idx}
            latitude={marker.Lat}
            longitude={marker.Long}
            onClick={() => handleMarkerClick(marker)}
            offsetLeft={-10}
            offsetTop={-25}
          >
         <img id="reportMarker" src={process.env.PUBLIC_URL + 'img/pin-orange.png'} width="20" height="30" alt="marker"/>
          </Marker>
        );
      }else if (marker.Type === "Dim Light" || marker.Type === "Other"){
        console.log(marker.Type);
        return (
          <Marker
            key={idx}
            latitude={marker.Lat}
            longitude={marker.Long}
            onClick={() => handleMarkerClick(marker)}
            offsetLeft={-10}
            offsetTop={-25}
          >
         <img id="reportMarker" src={process.env.PUBLIC_URL + 'img/pin-yellow.png'} width="20" height="30" alt="marker"/>
          </Marker>
        );
      }
    })
    }
    {selectedMarker &&
      <Popup
      latitude={selectedMarker.Lat}
      longitude={selectedMarker.Long}
      closeButton={true}
      closeOnClick={false}
      onClose={handleClose}
    >
      <div id = "markers">
        <p><strong>Date: </strong>{selectedMarker.Date.slice(0, 10)}</p>
        <p><strong>Type: </strong>{selectedMarker.Type}</p>
        <p><strong>Description: </strong>{selectedMarker.Text}</p>
      </div>
    </Popup>
    }
    </ReactMapGl>
    </div>
  );
}
}
