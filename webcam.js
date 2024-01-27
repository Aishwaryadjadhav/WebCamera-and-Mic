let btn= document.querySelector("#btn")
console.log(btn);

btn.addEventListener("click", () => {
    let video = document.getElementById("video")
    console.log(video);
    window.navigator.mediaDevices.getUserMedia({
        audio:true,
        video:{height:500,width:500}
    })
    .then((stream) => {
        video.srcObject=stream;
        video.play()
    })
})