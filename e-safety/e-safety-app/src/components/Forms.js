import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import ReactMapGl, {Marker, Popup} from 'react-map-gl'
import Geocoder from 'react-map-gl-geocoder'
import mapboxgl from 'mapbox-gl';
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

const mapboxToken = 'pk.eyJ1IjoiZnV3YWswbzAiLCJhIjoiY2wydnFydGZxMGVqNTNkb2EwN2ZkNHcxdyJ9.UztIdH-2TQS0MtVez1xznA'

class FORM_MODEL extends Component {
  constructor() {
    super()
    this.state = {
      viewport: {
        latitude: 47.662777,
        longitude: -122.313877,
        zoom: 14
      },
      currMarker: null,
      markers: [],
      selectedMarker: null,
      numberLat:0,
      numberLong:0,
      selectedDate: null,
      selectedType: null,
      descriptionText: ''
    }
    this.handleViewportChange = this.handleViewportChange.bind(this)
    this.handleGeocoderViewportChange = this.handleGeocoderViewportChange.bind(this)
    this.handleResult = this.handleResult.bind(this)
    this.addMarker = this.addMarker.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleMarkerClick = this.handleMarkerClick.bind(this)
    this.handleDate = this.handleDate.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  mapRef = React.createRef()

  handleViewportChange(viewport) {
    this.setState(prevState => ({
      viewport: {...prevState.viewport, ...viewport}
    }))
  }
  handleGeocoderViewportChange(viewport) {
    const geocoderDefaultOverrides = {transitionDuration: 1000}
    return this.handleViewportChange({
      ...viewport,
      ...geocoderDefaultOverrides
    })
  }
  handleResult (result) {
    this.setState({
      currMarker: {
        name: result.result.place_name,
        latitude: result.result.center[1],
        longitude: result.result.center[0]
      }
    })
  }
  addMarker() {
    const {currMarker} = this.state
    this.setState(prevState => ({
      numberLat: currMarker.latitude,
      numberLong: currMarker.longitude,
      markers: [currMarker],
      currMarker: null
    }))
  }
  handleMarkerClick(marker) {
    this.setState({
      selectedMarker: marker
    })
  }
  handleClose = () => {
    this.setState({
      selectedMarker: null
    })
  }
  handleDate(date) {
    this.setState({
      selectedDate: date
    })
  }
  handleType(event) {
    this.setState({
      selectedType: event.target.value
    })
  }
  handleDescription(event) {
    this.setState({
      descriptionText: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.numberLat);
    //variables to submit:
    //this.state.numberLat
    //this.state.numberLong
    //this.state.selectedDate
    //this.state.selectedType
    //this.state.descriptionText
  }
  render() {
    const {viewport, markers, selectedMarker} = this.state
    return (
      <div>
      <div style={{ height: "100vh" }}>
      <ReactMapGl
        ref={this.mapRef}
        {...viewport}
        width="90%"
        height="90%"
        onViewportChange={viewport => this.setState({viewport})}
        mapboxApiAccessToken={mapboxToken}
        mapStyle="mapbox://styles/fuwak0o0/cl2vqyhwn000n14tgci6txwby"
      >
        <button className="add-btn" id="confirm" onClick={this.addMarker}>Confirm</button>
        {markers.map((marker, idx) => {
          return (
            <Marker
              key={idx}
              latitude={marker.latitude}
              longitude={marker.longitude}
              onClick={() => this.handleMarkerClick(marker)}
              offsetLeft={-10}
              offsetTop={-25}
            >
            <img id="reportMarker" src="https://www.pngkey.com/png/full/196-1963823_map-clip-art-at-clker-com-vector-purple.png" width="20" height="30" alt="marker"/>
            </Marker>
          )
        })
        }
        <Geocoder
          onSelected={this.handleResult}
          mapRef={this.mapRef}
          placeholder="Search here!"
          onViewportChange={this.handleGeocoderViewportChange}
          onResult={this.handleResult}
          mapboxApiAccessToken={mapboxToken}
          countries="us"
          position="top-right"
        />
        {this.state.selectedMarker &&
          <Popup
          mapRef={this.mapRef}
          latitude={selectedMarker.latitude}
          longitude={selectedMarker.longitude}
          closeButton={true}
          closeOnClick={false}
          onClose={this.handleClose}
        >
            <h3>{selectedMarker.latitude}, {selectedMarker.longitude}</h3>
        </Popup>
      }
      </ReactMapGl>
      </div>
      <div>
      <form>
        <div className="form-group">
        <label>Coordinates:</label>
        <br />
        <br/>
        <label>
          Lat:
          <input
           name="lat"
           type="number"
           readOnly value={this.state.numberLat}
         />
        </label>
        <label>
          Long:
          <input
           name="long"
           type="number"
           readOnly value={this.state.numberLong}
         />
        </label>
        <br/>
        <br/>
        </div>
        <div className="form-group">
        <label>Select Date: </label>
        <DatePicker
          popperPlacement="bottom"
          selected={this.state.selectedDate}
          onChange={this.handleDate}
          placeholderText={'dd/mm/yyyy'}
          showYearDropdown // year show and scrolldown alos
          scrollableYearDropdown
        />
        </div>
        <br />
        <br />
        <div className="form-group">
        <label>Select Incident Type: </label>
        <select value={this.state.selectedType} onChange={this.handleType}>
          <option value="crime">Crime</option>
          <option value="dim light">Dim Light</option>
          <option value="drug activity">Drug Activity</option>
          <option value="yelling/verbal aggression">Yelling/verbal aggression</option>
          <option value="suspicious individuals">Suspicious individuals</option>
          <option value="other">Other</option>
        </select>
        </div>
        <br />
        <br />
        <div className="form-group">
        <label>
          Incident Description:
          <textarea value={this.state.descriptionText} onChange={this.handleDescription}/>
        </label>
        <br />
        <br />
        </div>
        <div className="form-group">
        <Link to='/home'>
        <button type="submit" onClick={this.handleSubmit}>Submit</button>
        </Link>
        </div>
      </form>
      <div class = "back">
        <Link to='/home'>
        <button>Back</button>
        </Link>
      </div>
      </div>
      </div>
    )
  }
}

export default FORM_MODEL;
