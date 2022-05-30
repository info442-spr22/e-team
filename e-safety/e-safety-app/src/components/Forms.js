import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import React, { Component } from 'react';
import { Link , Redirect, withRouter} from 'react-router-dom';
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
      descriptionText: '',
      latError:'',
      longError:'',
      dateError:'',
      textError:'',
      condition: false
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
      markers: [currMarker]
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
  validate() {
    let latError = "";
    let longError = "";
    let dateError = "";
    let typeError = "";
    let textError = "";
    if (this.state.numberLat === 0) {
      latError = "Please select a location through the search bar in the map";
    }
    if (this.state.numberLong === 0) {
      longError = "Please select a location through the search bar in the map";
    }
    if (!this.state.selectedDate) {
      dateError = "Please select a date";
    }
    if (!this.state.selectedType) {
      typeError = "Please select an incident type!";
    }
    if (this.state.descriptionText === '') {
      textError = "Please enter incident details";
    }
    if (latError || longError || dateError || typeError || textError) {
      this.setState({ latError,longError,dateError,typeError,textError });
      return false;
    }
    return true;
  }
  handleSubmit(event) {
    if (this.validate()) {
      event.preventDefault();
      console.log(this.state.numberLat);
       alert('Your report was submitted successfully');
      this.setState({ condition: true });
    }
    event.preventDefault();
    //variables to submit:
    //this.state.numberLat
    //this.state.numberLong
    //this.state.selectedDate
    //this.state.selectedType
    //this.state.descriptionText
  }
  render() {
    const {viewport, markers, selectedMarker} = this.state;
    const {condition } = this.state;
    if (condition) {
       return <Redirect to={{
            pathname: "/home",
            state: {
              Lat: this.state.numberLat,
              Long: this.state.numberLong,
              Date: this.state.selectedDate,
              Type: this.state.selectedType,
              Text: this.state.descriptionText
            }
          }}/>;
     }
    return (
      <div id= "forms">
      <div style={{height: "60vh"}} id= "form-map">
      <ReactMapGl
        ref={this.mapRef}
        {...viewport}
        width="100%"
        height="90%"
        onViewportChange={viewport => this.setState({viewport})}
        mapboxApiAccessToken={mapboxToken}
        mapStyle="mapbox://styles/fuwak0o0/cl2vqyhwn000n14tgci6txwby"
      >
        <button className="add-btn" id="form-btn" onClick={this.addMarker}>Confirm</button>
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
            <img id="reportMarker" src={process.env.PUBLIC_URL + 'img/pin-purple.png'} width="20" height="30" alt="marker"/>
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
      </ReactMapGl>
      </div>
      <div>
      <form id="myForm" onSubmit={this.handleSubmit}>
        <div className="form-group">
        <p id = "coord-title">Coordinates: <h5 id = "coord-note">(can only be updated through selecting a new location in the map)</h5> </p>
        <label id = "coord">
          Lat:
          <input
           name="lat"
           type="number"
           readOnly value={this.state.numberLat}
         />
         <br/>
         <span className="text-danger">{this.state.latError}</span>
        </label>
        <label id = "coord" >
          Long:
          <input
           name="long"
           type="number"
           readOnly value={this.state.numberLong}
         />
         <br/>
         <span className="text-danger">{this.state.longError}</span>
        </label>
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
        <span className="text-danger">{this.state.dateError}</span>
        </div>
        <br />
        <div className="form-group">
        <label>Select Incident Type: </label>
        <select value={this.state.selectedType} onChange={this.handleType}>
          <option value="Crime">Crime</option>
          <option value="Dim Light">Dim Light</option>
          <option value="Drug Activity">Drug Activity</option>
          <option value="Yelling/Verbal Aggression">Yelling/Verbal Aggression</option>
          <option value="Suspicious Individuals">Suspicious Individuals</option>
          <option value="Other">Other</option>
        </select>
        <br />
        <span className="text-danger">{this.state.typeError}</span>
        </div>
        <br />
        <div className="form-group">
        <label>
          Incident Description:
        </label>
          <textarea value={this.state.descriptionText} onChange={this.handleDescription}/>
          <br/>
          <span className="text-danger">{this.state.textError}</span>
        <br />
        <br />
        </div>
        <div className="form-group">
        </div>
        <Link to='/home'>
        <button className = "back-btn">Back</button>
        </Link>
        <button type="submit" className = "submit-btn">Submit</button>
      </form>
      </div>
      </div>
    )
  }
}

export default withRouter(FORM_MODEL)
