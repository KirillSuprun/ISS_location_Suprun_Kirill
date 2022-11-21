import React, {useState, useEffect} from "react";
import classes from './MembersTeam.module.css'


const MembersTeam = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [members, setMembers] = useState({});
  
    
      useEffect(() => {
        fetch("http://api.open-notify.org/astros.json")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setMembers(result.people.filter(item => item.craft === 'ISS'));
            },

            (error) => {
              setIsLoaded(true);
              setError(error);
            }

            
          )
          //---------------------------------------------------------------------
          setInterval(() => { 
            fetch("http://api.open-notify.org/astros.json")
              .then(res => res.json())
              .then(
                (result) => {
                  setIsLoaded(true);
                  setMembers(result.people.filter(item => item.craft === 'ISS'));
                },

                (error) => {
                  setIsLoaded(true);
                  setError(error);
                }
              )
              
          }, 5000);
        }, []
      )
    
  

    if (error) {
      return <div className="text-center pt-2">Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="h-100 d-flex flex-column justify-content-center align-items-center" > 
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div> 
              </div>;
    } else {

        return(
            <div className="h-100 d-flex flex-column justify-content-center">
                {members.map((member, index) => 
                <div className={classes.member} key={index}> 
                  {member.name}
                </div>
              )}
                <div className=''> 
                 <hr/>
                 <div  style={{fontSize: 'calc(1rem + 0.2vw)'}} className="text-start ps-3 pe-1 d-flex align-items-center flex-row ">
                    <p> <strong > Total amount: {members.length} </strong>  people on ISS right now </p>
                  </div>
                </div>

            </div>
        )
    }
};

export default MembersTeam;