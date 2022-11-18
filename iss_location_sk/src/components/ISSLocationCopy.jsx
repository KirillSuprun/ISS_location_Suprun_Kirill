import React, {useState, useEffect} from "react";
import MapPoint from "./MapPoint";

class ISSLocationCopy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    

    this.location = setInterval(
      () => this.tick(),
      1000
    );
  }


  componentWillUnmount() {
    clearInterval(this.timerID);
  }


  tick() {
    this.setState({
      date: new Date()
    });
  }

  render(){
    return(
      <div className="text-center mt-2"> 
        <h3> ISS location </h3>
        <p> 
          <strong> Latitude: </strong> {location.iss_position.latitude} 
          <strong className="ps-3"> Longitude: </strong> {location.iss_position.longitude}
        </p> 
      </div>
    )
  }
};

export default ISSLocationCopy;