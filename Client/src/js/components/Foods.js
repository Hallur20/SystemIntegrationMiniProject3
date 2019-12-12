import React, { Component } from "react";
import {Table} from 'react-bootstrap';
class Foods extends Component {
    constructor(){
        super();
        this.state = {categories: [], foodNames : [], foodChoice : "", foodChoiceId : ""}
        this.categoriesDropdown = this.categoriesDropdown.bind(this);
    }


componentDidMount(){
        fetch("http://localhost:5009/api/v1/food/categories",{headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }}).then((res)=>{
          return res.json();
    }).then((json)=>{
        this.setState({categories : json });
    })
    
}
categoriesDropdown(){
    var arr = this.state.categories;
    var arrJSX = [];
    for(var i = 0; i < arr.length; i++){
        arrJSX.push(<a onClick={(e) => this.pickCategory(e.target.textContent)} className="dropdown-item" href="#">{arr[i]}</a>);
    }
    return arrJSX;
}

pickCategory(e){
    fetch("http://localhost:5009/api/v1/food/category?name=" + e, {headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
    }}).then((res) => {
        return res.json();
    }).then((json) => {
        var arr = [];
        var arrAfter = [];
        arr = json;
        
        for(var i = 0; i < arr.length; i++){
            arrAfter.push(  <tr>
                <td>{arr[i].id}</td>
                <td><a onClick={(e) => this.pickFood(e.target.textContent)} href="#">{arr[i].name}</a></td>
                <td>{arr[i].description}</td>
              </tr>);
        }
       this.setState({foodNames : arrAfter})
    })
}
pickFood(e){
    this.setState({foodChoice : "you have purchased: " + e + ", please leave some feedback"});
}
  


    render() {
     
        return (
            <div>
                
                <p>these are your selection of foods (pick a category)</p>
                {this.state.foodChoice}
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Food categories
  </button>

                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {this.categoriesDropdown()}
                </div>
                
                
            </div>
            <Table responsive>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>description</th>
                </tr>  </thead> <tbody>
            {this.state.foodNames}</tbody>
            </Table>
            <p>afterwards you will be greeted by a food of choice in that category, and it's up to you if you want to cancel or buy the food</p>
            </div>
        )
    }
}
export default Foods;