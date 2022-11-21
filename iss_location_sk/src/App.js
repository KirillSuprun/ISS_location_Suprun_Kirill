import React  from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import ISSLocation from './components/ISSLocation';
import MapPoint from './components/MapPoint';
import DateTime from './components/DateTime';
import MembersTeam from './components/MembersTeam';


function App() {


  return (
    <div className="App">
      
      <div className='video'> 

          <div className="full_screen">
            <div className="full_screen_body"> 
              <main className='container app_container'> 

                <div className='main_component iss_location '> 
                  <ISSLocation/> 
                </div>

                <div className='main_component data_time '> 
                  <DateTime        />   
                </div>

                
                  <MapPoint  />     
                

                <div className='main_component iss_members '>  
                  <MembersTeam />    
                </div>

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
