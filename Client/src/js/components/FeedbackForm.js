import React, { Component } from "react";
import { Button } from 'react-bootstrap';

class FeedbackForm extends Component{
    constructor(){
        super();
        this.state = {
            rating : "",
            sex: "hey",
            country: "", //currently 0,0 if user does not accept geolocation...
            gender: "",
            age : "20-30",
            description : ""
        }
    }

    render(){
        return <div>
            <div className=''>

            </div>
            <p>then, if you wish, leave some feedback: </p>
            <form>
                <div className='form-group'>
                    <label for='countryInput'>Country</label>
                    <input id='countryInput' type='text' value={this.state.country} className='form-control'/>
                </div>
                <div className='form-group'>
                    <label for='genderInput'>Gender</label>
                    <select id='genderInput' value={this.state.gender} className='form-control'>
                        <option value='' style={{display: 'none'}}></option>
                        <option value='female'>Female</option>
                        <option value='male'>Male</option>
                        <option value='other'>Other</option>
                    </select> 
                </div>
                <div className='form-group'>
                    <label for='ageInput'>Age</label>
                    <select id='ageInput' value={this.state.age} className='form-control'>
                        <option value='' style={{display: 'none'}}></option>
                        <option value="14-21">14-21</option>
                        <option value="22-32">22-32</option>
                        <option value="33-50">33-50</option>
                        <option value="51-65">51-65</option>
                        <option value="66-80">66-80</option>
                        <option value="80-">80-more</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label for='ratingInput'>Rating 1-5</label>
                    <select id='ratingInput' value={this.state.age} className='form-control'>
                        <option value='' style={{display: 'none'}}></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select> 
                </div>  
                <div className='form-group'>
                    <label for='commentInput'>Comment</label>
                    <textarea id='commentInput' value={this.state.description} className='form-control'></textarea>
                </div>
                <input className='btn' type="submit" value="Leave feedback"/>
            </form>
        </div>
    }
}

export default FeedbackForm;