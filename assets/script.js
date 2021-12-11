
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








