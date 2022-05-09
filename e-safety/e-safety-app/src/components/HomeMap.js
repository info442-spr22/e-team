import 'mapbox-gl/dist/mapbox-gl.css'
import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiZnV3YWswbzAiLCJhIjoiY2wydnFydGZxMGVqNTNkb2EwN2ZkNHcxdyJ9.UztIdH-2TQS0MtVez1xznA'

export default function HomeMap() {
  const [viewport, setViewport] = useState({
    latitude: 47.662777,
    longitude: -122.313877,
    zoom: 14
  });

  return (
    <div style={{ height: "100vh" }}>
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
