import React, { Component } from "react";

class FeedbackForm extends Component{
    constructor(){
        super();
        this.state = {
            sex: "hey",
            geo: {lat : 0, lon: 0}, //currently 0,0 if user does not accept geolocation...
            gender: "",
            age : null
        }
    }



    componentDidMount(){
navigator.geolocation.getCurrentPosition((position)=>{
    this.setState({geo : {lat: position.coords.latitude, lon : position.coords.longitude}})
});
    }

    render(){
        return <div>
            <p>then, if you wish, leave some feedback: </p>
            <form>
                geographical location:<br/>
                latitude<br/>
                <input value={this.state.geo.lat} readOnly/><br/>
                longitude<br/>
                <input value={this.state.geo.lon} readOnly/><br/>
                gender<br/><input/><br/>
                age<br/><input/><br/><br/>
                <input type="submit" value="Leave feedback"/>
            </form>
           
        </div>
    }
}

export default FeedbackForm;