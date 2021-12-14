
// we created a API key and function thta give us back the city we are looking for 
document.querySelector('.btn').addEventListener('click', function () {
    var city = document.getElementById('city-search').value
    getCity(city)
})


function getCity(city) {
    fetch('http://open.mapquestapi.com/nominatim/v1/search.php?key=sCFiupNXfYSdEqiHE3MpAlyL0c8FzCFs&format=json&q=' + city)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
        })
}
       /* var city = []
        var storage = JSON.parse(localStorage.getItem("data"));
    
        if (storage === null) {
            citySearch.textContent = "City not found!"
            
        } else {
            citySearch.textContent = '';
            for (var i =0 ; i < storage.length; i++) {
                var createLi = document.createElement("li")
                createLi.textContent = 'city: ' + storage[i].data
                citySearch.appendChild(createli);
            }
        }
    } 

*/







