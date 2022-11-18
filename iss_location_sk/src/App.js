import React, {useState} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import ISSLocation from './components/ISSLocation';
import MapPoint from './components/MapPoint';
import DateTime from './components/DateTime';

function App() {

  const location = useState({
    longitude: 0.9999,
    latitude: 10.9999
  })

  return (
    <div className="App">
      
      <div className='video'> 

          <div className="full_screen">
            <div className="full_screen_body"> 
              <main className='container app_container'> 
                <div className='iss_location bg-danger'> 
                  <ISSLocation/> 
                </div>

                <div className='data_time bg-success'> Data and time now <DateTime />    </div>

                <div className='map_point bg-warning'> Point on map, where ISS  <MapPoint />    </div>

                <div className='iss_members bg-info'>  Members on ISS    </div>

                

              
              </main>
            </div>
         
            <video loop autoPlay muted preload="auto" className="full_screen_video" width="">
                <source type="video/mp4" src="./assets/StarsVideo.mp4" />
            </video>
        </div>

      </div>

    </div>
  );
}

export default App;
