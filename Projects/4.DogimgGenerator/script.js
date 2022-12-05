// $(document).read(alert("It worked"));

$("img").attr("src", "https://images.dog.ceo/breeds/bulldog-english/jager-2.jpg")

$("button").on("click", function(){
    // alert("Button has been clicked")
    let endpoint = "https://dog.ceo/api/breeds/image/random"
    fetch(endpoint)
    .then(response =>{
        // parse (turn into an object) response which is a json
    console.log(response)
    if(response.ok) return response.json()
    throw Error(!response.json() ? "No data": "Connection issue")
    })
    .then(data =>{
        // console.log(data.message)
        // do something with data
        $("img").attr("src", data.message)
    })
    .catch( error => {
        // let theStyle = (
        //     color: "red",
        //     marginTop: 0
        // )
        $("#error").text(error)
    })
})



