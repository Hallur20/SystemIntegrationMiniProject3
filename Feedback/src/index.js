const backend = require('./backend')
    
// test to see if working
backend.initialSetup().then(()=> {
    backend.createFeedback(5, 1, {
        description : "Bob was here", 
        gender : "male", 
        countryName : "DK", 
        upperAge : 10, 
        lowerAge : 2, 
    }).then(() => {
        backend.readFeedbackByFoodId(1).then((feedback) => {
            console.log(feedback);
            backend.updateFeedback(feedback[0].id, feedback[0].rating, 4, {
                description : feedback[0].description, 
                gender : feedback[0].gender, 
                countryName : feedback[0].countryName, 
                upperAge : feedback[0].upperAge, 
                lowerAge : feedback[0].lowerAge, 
            }).then(() => {
                backend.readFeedbackByFoodId(4).then((feedback2) => {
                    console.log(feedback2);
                    backend.deleteFeedback(feedback2[0].id).then(() => { console.log("Promise worked"); });
                });

            });
        });
    });
});