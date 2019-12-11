import React, { Component } from "react";
class Foods extends Component {
    render() {
        return (
            <div>
                <p>these are your selection of foods (pick a category)</p>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Food categories
  </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Nuts</a>
                    <a className="dropdown-item" href="#">Herbs and spices</a>
                    <a className="dropdown-item" href="#">Coffee</a>
                </div>
            </div>
            <p>afterwards you will be greeted by a food of choice in that category, and it's up to you if you want to cancel or buy the food</p>
            </div>
        )
    }
}
export default Foods;