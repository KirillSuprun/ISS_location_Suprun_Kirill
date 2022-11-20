import React, {useState, useEffect} from "react";

const ISSLocation = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [location, setLocation] = useState([]);
  
    
          useEffect(() => {
            fetch("http://api.open-notify.org/iss-now.json")
            .then(res => res.json())
              .then(
                (result) => {
                  setIsLoaded(true);
                  setLocation(result);
                },
    
                (error) => {
                  setIsLoaded(true);
                  setError(error);
                }
              )
              });

         
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {

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

export default ISSLocation;