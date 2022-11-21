
// 'https://image.maps.api.here.com/mia/1.6/mapview?app_id=oZmMWRV4tAjQmgkxBvF0&app_code=x5pKHqifhw1mnS_zBTIFsA&z=15&w=300&h=300&c=${i.longitude},${i.latitude}'
import React from 'react'



class MapPoint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      map: 'https://image.maps.api.here.com/mia/1.6/mapview?app_id=oZmMWRV4tAjQmgkxBvF0&app_code=x5pKHqifhw1mnS_zBTIFsA&z=3&w=500&c=48.442460,35.023710'
              ,
      info: [],
    };
  }

  locationInfo(){
    fetch("http://api.open-notify.org/iss-now.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            map: 'https://image.maps.api.here.com/mia/1.6/mapview?app_id=oZmMWRV4tAjQmgkxBvF0&app_code=x5pKHqifhw1mnS_zBTIFsA&z=3&w=500&c=' + result.iss_position.longitude + ',' + result.iss_position.latitude,
            info: result.iss_position,
          });
        },


        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }


  componentDidMount() {
    this.locationInfo();
    this.timerID = setInterval(
      () => this.locationInfo(),
      5000
    );
    
  }



  componentWillUnmount() {
    clearInterval(this.timerID);
  }


  render() {
    const { error, isLoaded, info, map } = this.state;
    console.log(`map`, map)
    console.log(`info`, info)

    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <div style={{width: "100%", overflow: "hidden", background: 'rgba(243, 243, 243, 0.89)', border: '1px solid rgb(117, 117, 117)', margin: '0.5vh 0 0.5vh', padding: '0.2vh' }} className="d-flex justify-content-center" >
          <img  src={map} alt='ISS point on map'/>
        </div>
      );
    }
  }
}

export default MapPoint;

// background: rgba(243, 243, 243, 0.89);
//   border: 1px solid rgb(117, 117, 117);
//   margin: 0.5vh 0 0.5vh;
//   padding: 0.2vh