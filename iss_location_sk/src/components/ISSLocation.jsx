import React, {useState, useEffect} from "react";
// import MapPoint from "./MapPoint";

const ISSLocation = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [location, setLocation] = useState([]);
  
    // Примечание: пустой массив зависимостей [] означает, что
    // этот useEffect будет запущен один раз
    // аналогично componentDidMount()
    useEffect(() => {
      fetch("http://api.open-notify.org/iss-now.json")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setLocation(result);
          },
          // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
          // чтобы не перехватывать исключения из ошибок в самих компонентах.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
    console.log(`location`, location) // Проверка локации
    // let latitude  = location.iss_position.latitude;
    // let longitude = location.iss_position.longitude;
    
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