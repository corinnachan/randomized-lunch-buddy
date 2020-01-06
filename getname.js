function getName() {
   var xhr = new XMLHttpRequest;
   xhr.onreadystatechange = function () {
       if (xhr.readyState == 4 && xhr.status == 200) {
           var responseData = JSON.parse(xhr.response);

           randomNum = Math.floor(Math.random() * Math.floor(250));

           cityName = responseData[randomCountryNum].capital;
           newCurrency = responseData[randomCountryNum].currencies[0].code;
       }
   } 
}