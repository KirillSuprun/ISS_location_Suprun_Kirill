import React from "react";

class DateTime extends React.Component {
    constructor(props) {
      super(props);
      this.state = {time: new Date(), date: new Date().toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })};
    }
    
    

    componentDidMount() {
      this.timerID = setInterval(
        () => [this.tick(),  this.today()],
        1000
      );
      // дата обновляется каждую секунду вместо со временем
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        time: new Date()
      });
    }

    today(){
      this.setState({
        date: new Date().toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
      })
    }
  
    render() {
      return (
        <div style={{fontSize: 'calc(1rem + 0.2vw)'}} className="ps-3 d-flex flex-column align-items-start justify-content-center h-100">
           <div > 
               <strong > Current time: </strong>  {this.state.time.toLocaleTimeString()} 
           </div>
           <div>
               {this.state.date}
           </div>
        </div>
      );
    }
  }

export default DateTime;