
// 'https://image.maps.api.here.com/mia/1.6/mapview?app_id=oZmMWRV4tAjQmgkxBvF0&app_code=x5pKHqifhw1mnS_zBTIFsA&z=15&w=300&h=300&c=${i.longitude},${i.latitude}'
import React from 'react'
import classes from './MapPoint.module.css'



class MapPoint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      map: 'https://image.maps.api.here.com/mia/1.6/mapview?app_id=oZmMWRV4tAjQmgkxBvF0&app_code=x5pKHqifhw1mnS_zBTIFsA&z=2&w=900&h=650&c=48.442460,35.023710'
        // https://image.maps.api.here.com/mia/1.6/mapview?app_id=oZmMWRV4tAjQmgkxBvF0&app_code=x5pKHqifhw1mnS_zBTIFsA&z=15&w=1000&h=1000&c=
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
            map: 'https://image.maps.api.here.com/mia/1.6/mapview?app_id=oZmMWRV4tAjQmgkxBvF0&app_code=x5pKHqifhw1mnS_zBTIFsA&z=2&w=900&h=650&c=' + result.iss_position.longitude + ',' + result.iss_position.latitude,
            info: result.iss_position,
          });
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
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
        <div className={classes.map}>
          <img  src={map} alt='ISS point on map'/>
        </div>
      );
    }
  }
}

export default MapPoint;