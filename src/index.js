import React from "react";
import ReactDOM from "react-dom/client";

import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

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


      renderContent(){
            if(this.state.errorMessage && !this.state.lat){
                return <div>Error:{this.state.errorMessage}</div>;
            }

            if(!this.state.errorMessage && this.state.lat){
                return <SeasonDisplay lat={this.state.lat} />;
            }

            return <Spinner message='Please accept Location request' />;
      }
    //required
    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
     }  
}

ReactDOM.createRoot(document.querySelector("#root"))
.render(
    <App />
);