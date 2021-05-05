Webcam.set({
    width:350,
    height:300 ,
    image_format:"png",
    png_quality:90
})
    
camera = document.getElementById("camera")
Webcam.attach('#camera')
 function takepic(){
     Webcam.snap(function (data_uri) {
         document.getElementById("output").innerHTML = "<image id='picturetaken' src="+data_uri+" >"
     })
 }
 console.log("ml5 version",ml5.version)
 whatever = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/CpYENAtgU/‌model.json",modelLoaded)
 function modelLoaded(){
     console.log("Model loaded")
 }