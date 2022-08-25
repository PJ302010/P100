var SpeechRecognition = window.webskitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start
}

recognition.onresult = function(event) {
    console.log(event);
}

var Content = event.results[0][0].transcript;

document.getElementbyId("textbox").innerHTML = Content;
console.log(Content);

if(Content == "take my selfie")
{
    console.log("taking selfie ---");
    speak()
}


function speak(){
    var synth = window.speechSynthetesis;

    speak_data = "taking your selfie in 5 seconds";

    var utterthis = new speechSynthesisUtterance(speak_data);

    synth.speak(uttertrhis);
    Webcam.attach(camera);

    setTimeout (function()
    {
        take_snapshot();
      save()
    }5000);
}


Webcam.set({
    width: 360,
    height:250,
    image_format: 'png',
    png_quality: 90
});

function take_snapshot(
    {
        webcam.snap(function(data_url)) {
            document.getElementById("result").innerHTML = '<img id="selfie_image" src="" '+data_url+'">';

        };
    }
)


function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").scroll;
    link.click();
}


function take_snapshot()
{
console.log(img_id);

webcam.snap(function(dtat_url) {
    if(img_id=="selfie1"){
    document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_url+'"/>'
    }
    if(img_id=="selfie2"){
        document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_url+'"/>'
        }
        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_url+'"/>'
            }
})
};

setTimeout()(function(
{
    img_id = "selfie1";
    take_snapshot();
    speak_data = "taking your next Selfie in 10 seconds";
    var utterthis = newSpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);

}, 50000-
))
