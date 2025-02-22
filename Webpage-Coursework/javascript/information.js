a = ["Join our company in Technology Zone of Visionary Innovation Hub for unparalleled opportunities in cutting-edge tech development! 15 QUOTAS LEFT!", "Become part of the Innovation Zone at Visionary Innovation Hub, where creativity meets research for groundbreaking solutions! 10 QUOTAS LEFT!", "Discover the Eco Zone at Visionary Innovation Hub, dedicated to sustainable practices and technologies for a greener future! 12 QUOTAS LEFT!"];
x = Math.floor(Math.random() * 3);

document.addEventListener("DOMContentLoaded", function() {
    const messages = [
        "Join our company in Technology Zone of Visionary Innovation Hub for unparalleled opportunities in cutting-edge tech development! 15 QUOTAS LEFT!",
        "Become part of the Innovation Zone at Visionary Innovation Hub, where creativity meets research for groundbreaking solutions! 10 QUOTAS LEFT!",
        "Discover the Eco Zone at Visionary Innovation Hub, dedicated to sustainable practices and technologies for a greener future! 12 QUOTAS LEFT!"
    ];
    let currentMessageIndex =  Math.floor(Math.random() * messages.length);;
    const promotionBlock = document.getElementById("promotion");

    function displayMessage() {
        promotionBlock.innerHTML = messages[currentMessageIndex];
        currentMessageIndex = (currentMessageIndex + 1) % messages.length; 
    }

    displayMessage();  
    setInterval(displayMessage, 3000);

    
});


let n = 1;
function switch_video() {
    
    if (n % 2 === 0) {
        document.getElementById("fir").src = "https://personal.cs.cityu.edu.hk/~cs2204/2024/video/video1.mp4";
        document.getElementById("sec").src = "https://personal.cs.cityu.edu.hk/~cs2204/2024/video/video1.webm";
        n--;
    } else {
        document.getElementById("fir").src = "https://personal.cs.cityu.edu.hk/~cs2204/2024/video/video2.mp4";
        document.getElementById("sec").src = "https://personal.cs.cityu.edu.hk/~cs2204/2024/video/video2.webm";
        n++;
    }
    document.getElementById("videoPlayer").load();

    document.getElementById("videoPlayer").play();
}




