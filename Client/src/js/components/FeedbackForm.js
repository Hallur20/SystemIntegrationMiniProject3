import React, { Component } from "react";
import { Button,DropdownButton,Dropdown,Card,Container,Row,Col } from 'react-bootstrap';



class FeedbackForm extends Component{
    constructor(){
        super();
  
        this.state = {
            foodID: '',
            country: "", //currently 0,0 if user does not accept geolocation...,
            description : "",
            genderValue: "Select gender",
            ageValue: "Select age",
            rating: "Select a Rate from 1-5"
          }
          this.changeGenderValue = this.changeGenderValue.bind(this);
          this.changeAgeValue = this.changeAgeValue.bind(this);
          this.changeRatingValue = this.changeRatingValue.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
    }



      changeGenderValue(text) {
        this.setState({genderValue: text})
      }

      changeAgeValue(text) {
        this.setState({ageValue: text})
      }
      changeRatingValue(text) {
        this.setState({rating: text})
      }


      handleSubmit(event){
         
          const data = new FormData(event.target);
event.preventDefault();
          fetch("http://localhost:3333/feedback", {method: "POST", body: JSON.stringify(Object.fromEntries(data)), headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          }})
      }

    render(){
        return <Card>
            <div className=''>

            </div>
            <Card.Header>Feedback: </Card.Header>
            <Card.Body>
            <Container>
                <Row>
                <Col xs>
                <div className='form-group'>
                    <label for='genderInput'>Gender</label>
                    <DropdownButton id='genderInput' value={this.state.gender}  title={this.state.genderValue}>
                        <Dropdown.Item as="button" ><div onClick={(e) => this.changeGenderValue(e.target.textContent)}>Female</div></Dropdown.Item>
                        <Dropdown.Item as="button" ><div onClick={(e) => this.changeGenderValue(e.target.textContent)}>Male</div></Dropdown.Item>
                        <Dropdown.Item as="button" ><div onClick={(e) => this.changeGenderValue(e.target.textContent)}>other</div></Dropdown.Item>
                    </DropdownButton>
                </div>
                </Col>
                <Col xs={{ order: 12 }}>
                <div className='form-group'>
                    <label for='ageInput'>Age</label>
                        <DropdownButton id='ageInput' value={this.state.age} title={this.state.ageValue}>
                        <Dropdown.Item as="button" ><div onClick={(e) => this.changeAgeValue(e.target.textContent)}>14-21</div></Dropdown.Item>
                        <Dropdown.Item as="button" ><div onClick={(e) => this.changeAgeValue(e.target.textContent)}>22-32</div></Dropdown.Item>
                        <Dropdown.Item as="button" ><div onClick={(e) => this.changeAgeValue(e.target.textContent)}>33-50</div></Dropdown.Item>
                        <Dropdown.Item as="button" ><div onClick={(e) => this.changeAgeValue(e.target.textContent)}>51-65</div></Dropdown.Item>
                        <Dropdown.Item as="button" ><div onClick={(e) => this.changeAgeValue(e.target.textContent)}>66-more</div></Dropdown.Item>
                    </DropdownButton>
                </div>
                </Col>
                <Col xs={{ order: 1 }}>
                <div className='form-group'>
                    <label for='ratingInput'>Rating 1-5</label>
                    <DropdownButton id='ratingInput' value={this.state.rating} title={this.state.rating}>
                    <Dropdown.Item as="button" ><div onClick={(e) => this.changeRatingValue(e.target.textContent)}>1</div></Dropdown.Item>
                    <Dropdown.Item as="button" ><div onClick={(e) => this.changeRatingValue(e.target.textContent)}>2</div></Dropdown.Item>
                    <Dropdown.Item as="button" ><div onClick={(e) => this.changeRatingValue(e.target.textContent)}>3</div></Dropdown.Item>
                    <Dropdown.Item as="button" ><div onClick={(e) => this.changeRatingValue(e.target.textContent)}>4</div></Dropdown.Item>
                    <Dropdown.Item as="button" ><div onClick={(e) => this.changeRatingValue(e.target.textContent)}>5</div></Dropdown.Item>
                    </DropdownButton> 
                </div>  
                </Col>
                </Row>
                </Container>


                
            <form onSubmit={this.handleSubmit}>
                <div className='form-group'>
                    <label for='countryInput'>Country</label>
                    <input id='countryInput' type='text' name="countryName"className='form-control'/>
                </div>
                <div className='form-group'>
                    <label for='commentInput'>Comment</label>
                    <input id='commentInput' name="description" className='form-control'></input>
                </div>
                <div className='form-group'>
                    <label for='commentInput'>gender</label>
                    <input id='commentInput' name="gender" value={this.state.genderValue} className='form-control'></input>
                </div>
                <div className='form-group'>
                    <label for='commentInput'>age</label>
                    <input id='commentInput' type="number" name="age" value={1} className='form-control'></input>
                </div>
                <div className='form-group'>
                    <label for='commentInput'>rating</label>
                    <input id='commentInput' type="number" name="rating" value={1} className='form-control'></input>
                </div>
                <div className='form-group'>
                    <label for='commentInput'>food id</label>
                    <input id='commentInput' type="number" name="foodId" value={1} className='form-control'></input>
                </div>
                <Button variant="success" type="submit" >Leave feedback</Button>
            </form>
            </Card.Body>
        </Card>
    }
}

export default FeedbackForm;