var generatorButton = document.querySelector(".generator-btn");
var results = document.querySelector("#name");
var obj = require('../classname.json');

generatorButton.addEventListener("click", getDestination);

function getName() {
   randomNum = Math.floor(Math.random() * Math.floor(332));
   name = obj[randomNum];
   
   results.innerHTML =
        "Catch up with " + name + "over lunch this week!";

   
//     var xhr = new XMLHttpRequest;
//    xhr.onreadystatechange = function () {
//        if (xhr.readyState == 4 && xhr.status == 200) {
//            var responseData = JSON.parse(xhr.response);

//            randomNum = Math.floor(Math.random() * Math.floor(250));

//            name = responseData[randomNum];
      
//            //use DOM manipulation to display name in html

//       cityResults.innerHTML =
//           "Catch up with " + name + "over lunch this week!";
//        };
//    };
//    xhr.open('GET',url,true);
//    xhr.send();
}