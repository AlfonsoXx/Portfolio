//Login open/close
function openForm(){
    document.getElementById('popupForm').style.display = "Block";
}

function closeForm(){
    document.getElementById('popupForm').style.display = "none";
    g;asghdahgodhg
}

// -----------------------Kerving added
//initial location of map launch
var mylatlng ={
    lat: 30.40332, lng:-97.70638
};

var mapOptions ={
    center: mylatlng,
    zoom: 7,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};


//Create map
var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions)

//Create direction using google integrated method
var directionsService = new google.maps.DirectionsService();

//Display the route
var directionsDisplay = new google.maps.DirectionsRenderer();

//binding directionsRenderer to map.
directionsDisplay.setMap(map);

function calcRoute(){
    var request ={
        origin:document.getElementById("lati").value,
        destination:document.getElementById("long").value,
        travelMode: google.maps.TravelMode.DRIVING,
        //unitSystem:google.maps.UnitSystem.IMPERIAL
    }


    directionsService.route(request, (result, status) => {
        if(status == google.maps.DirectionsStatus.OK){

            //display route.
            directionsDisplay.setDirections(result);
            directionsDisplay.setMap(map);
            console.log(result)
        } else {
            
             directionsDisplay.setDirections({routes:[]});
             map.setCenter(myLatLng);
        }
    });
}


//Create autocomplete

var options ={
    componentRestrictions: { country: "us" },
    fields: ["address_components", "geometry", "icon", "name"],
    strictBounds: false,
    types: ["establishment"],
}

var input1 = document.getElementById("lati");
var autocomplete1 = new google.maps.places.Autocomplete(input1, options)

var input2 = document.getElementById("long");
var autocomplete2 = new google.maps.places.Autocomplete(input2, options)

var input3 = document.getElementById("addressBox");
var autocomplete3 = new google.maps.places.Autocomplete(input3, options)