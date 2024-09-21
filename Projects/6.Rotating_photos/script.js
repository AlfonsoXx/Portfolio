var imageArray = ["./img/background1.jpeg", "./img/background2.jpeg", "./img/background3.jpeg"]
var index = 0;

function rotateImage(){
    document.querySelector('.background-img').setAttribute("src", imageArray[index]);
    index++;
    if(index >= imageArray.length){
        index = 0;
    }
}

setInterval(rotateImage, 3000)