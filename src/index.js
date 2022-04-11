import React from "react";
import ReactDOM from "react-dom/client";

import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
     state = {lat: null, errorMessage: ''};

     componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (err) => this.setState({errorMessage: err.message})
        );
      }

      componentDidUpdate(){
        
      }

    //required
    render() {
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error:{this.state.errorMessage}</div>;
        }

        if(!this.state.errorMessage && this.state.lat){
            return <div><SeasonDisplay lat={this.state.lat} /></div>;
        }

        return <div>Loading</div>
     }  
}

ReactDOM.createRoot(document.querySelector("#root"))
.render(
    <App />
);