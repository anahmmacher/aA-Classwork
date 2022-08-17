import React from "react";
import MarkerManager from "../../util/marker_manager";
import { withRouter} from 'react-router-dom'

const getCoordsObj = latLng =>({
  lat: latLng.lat(),
  lng: latLng.lng()
});

 const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };


;

class BenchMap extends React.Component {
 

    componentDidMount() {

    // wrap this.mapNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
      if (this.props.singleBench) {
      this.props.fetchBench(this.props.benchId);
    } else {
      this.registerListeners();
      this.MarkerManager.updateMarkers(this.props.benches)
    }
//     if (this.props.singleBench){
// 	const cent = this.centerCoords();
// 	this.map = new google.maps.Map(this.mapNode, cent);
// 	this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
// 	this.props.fetchBench(this.props.benchId);
// } else {
// 	this.map = new google.maps.Map(this.mapNode, mapOptions);
// 	this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
// 	this.registerListeners();
// 	this.MarkerManager.updateMarkers(this.props.benches)
// }
  }

  componentDidUpdate(){
    if (this.props.singleBench){
      var cent = this.centerCoords();
      this.map.setCenter(cent.center);
      this.map.setZoom(15);
      console.log(cent.center)
      const targetBenchKey = Object.keys(this.props.benches)[0];
      const targetBench = this.props.benches[targetBenchKey];
      this.MarkerManager.updateMarkers([targetBench]);
    } else {
    this.MarkerManager.updateMarkers(this.props.benches);
  }
}


  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: {lat: north, lng: east},
        southWest: {lat: south, lng: west}
      };
      this.props.updateFilter('bounds', bounds);
    });
    google.maps.event.addListener(this.map, 'click', (event) => {
      const coords = getCoordsObj(event.latLng);
      this.handleClick(coords);
    });
  }

  handleMarkerClick(bench) {
    this.props.history.push(`benches/${bench.id}`);
  }

  handleClick(coords) {
    this.props.history.push({
      pathname: 'benches/new',
      search: `lat=${coords.lat}&lng=${coords.lng}`
    });
  }

  centerCoords(){
    const newLat = parseFloat(this.props.benchCoords.lat);
    const newLng = parseFloat(this.props.benchCoords.lng);

    const newCenter = {
      center: { lat: newLat, lng: newLng}
    }

    return newCenter
  }
    render() {
    return (
        <div id="map-container" ref={ map => this.mapNode = map }>
        Map
        </div>
    );
    }

}   

export default withRouter(BenchMap)