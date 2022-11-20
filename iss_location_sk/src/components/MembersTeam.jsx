import React, {useState, useEffect} from "react";

const MembersTeam = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [location, setLocation] = useState({});
  
    
      useEffect(() => {
        setInterval(
          () => fetch("http://api.open-notify.org/astros.json")
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
          ,
          5000)}, [])
    

    if (error) {
      return <div className="text-center pt-2">Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="text-center pt-2" > </div>;
    } else {

        return(
            <div className="text-center pt-2"> 
                <h3> Members Here  333333333</h3>
            </div>
        )
    }
};

export default MembersTeam;