var images = ["./img/1.jpeg","./img/2.jpeg","./img/3.jpeg", "./img/4.jpeg", "./img/5.jpeg", "./img/6.jpeg"];
    var index =1;
    // Event listener for the "Next" Button
    document.getElementById('Next').addEventListener('click',function(){
        var nextImage = images[index]
        document.querySelector('img').setAttribute('src', nextImage);
        index++;
        if(index === images.length){
            index = 0;
        }
});

//Event listener for the "Prev" Button
document.getElementById("Prev").addEventListener('click',function(){
    index--;
    if (index < 0){
        index = images.length -1;
    }
    var prevImage = images[index];
    document.querySelector('img').setAttribute('src', prevImage);

});
