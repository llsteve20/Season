import React from "react";
import ReactDOM from "react-dom/client";

class App extends React.Component {
     state = {lat: null, errorMessage: ''};

     componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (err) => this.setState({errorMessage: err.message})
        );
      }

      componentDidUpdate(){
        console.log('My component was updated - it rerendered');
      }

    //required
    render() {
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error:{this.state.errorMessage}</div>;
        }

        if(!this.state.errorMessage && this.state.lat){
            return <div>Latitude:{this.state.lat}</div>;
        }

        return <div>Loading</div>
     }  
}

ReactDOM.createRoot(document.querySelector("#root"))
.render(
    <App />
);