import React from "react";

class ISSLocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          location: []
          };
    }     
        
      locationInfo(){
        fetch("http://api.open-notify.org/iss-now.json")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                location: result
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
        const { error, isLoaded, location  } = this.state;
        if (error) {
          return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
          return <div className="h-100 d-flex flex-column justify-content-center align-items-center" > 
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div> 
        </div>;
        } else {
          return (
            <div className="h-100 text-center d-flex flex-column justify-content-center"> 
               <div style={{fontSize: 'calc(1.2rem + 0.2vw)'}}> <strong> ISS location </strong> </div>
               <div> 
                <strong> Latitude: </strong> {location.iss_position.latitude} 
                <strong className="ps-3"> Longitude: </strong> {location.iss_position.longitude}
               </div> 
            
            </div>
          );
      };
    };
}

export default ISSLocation;