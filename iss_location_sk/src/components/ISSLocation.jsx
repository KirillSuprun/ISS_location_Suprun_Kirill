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
        const { error, isLoaded, location  } = this.state;
        if (error) {
          return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Загрузка...</div>;
        } else {
          return (
            <div className="h-100 text-center d-flex flex-column justify-content-center"> 
               <h3> ISS location </h3>
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