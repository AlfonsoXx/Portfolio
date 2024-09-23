function displayClock(){
    //Get current times
    const d = new Date();
    let hour = d.getHours();
    let mins = d.getMinutes();
    let sec = d.getSeconds();

    //Format time to always show two digits
    hour = String(hour).padStart(2,'0');
    mins = String(mins).padStart(2,'0');
    sec = String(sec).padStart(2,'0');

    //Get Elements and updates hour/min/sec 
    const element = document.getElementById("clock") 
    element.innerHTML= hour + ":" + mins + ":" + sec;
    
}
    //call function every sec
    setInterval(displayClock, 1000);


