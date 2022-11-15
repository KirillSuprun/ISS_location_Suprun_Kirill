import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      
      <div className='video'> 

          <div className="full_screen">
            <div className="full_screen_body"> 
              <main className='container app_container'> 

                <div className='iss_location bg-danger'>  Location of ISS    </div>

                <div className='iss_location bg-success'> Data and time now     </div>

                <div className='iss_location bg-warning'> Point on map, where ISS     </div>

                <div className='iss_location bg-info'>  Members on ISS    </div>

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
