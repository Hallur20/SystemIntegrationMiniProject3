var fetch = require("node-fetch");



getCategories = () => {
    fetch("http://localhost:5009/api/v1/food/categories",{headers: {
    'Content-Type': 'application/json'
    // 'Content-Type': 'application/x-www-form-urlencoded',
  }}).then((res)=>{
      return res.json();
}).then((json)=>{
    return json;
})
}