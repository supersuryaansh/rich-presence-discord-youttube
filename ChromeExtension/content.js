chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    sendResponse({
        response: "Message Received! (content)"
    });
	if(document.getElementsByClassName("byline style-scope ytmusic-player-bar complex-string")[0] != undefined) {
    sendMessage();
	}
});

function sendMessage() {
    x = 1;  // 5 Seconds
	var songName = document.getElementsByClassName("title style-scope ytmusic-player-bar")[0].innerHTML;
    var artistName = document.getElementsByClassName("byline style-scope ytmusic-player-bar complex-string")[0].innerText;
    var time = document.getElementsByClassName("time-info style-scope ytmusic-player-bar")[0].innerText.toString();
    var vidUrl = document.getElementsByClassName("ytp-title-link yt-uix-sessionlink")[0].href.toString();
    chrome.runtime.sendMessage({
        song: songName,
        artist: artistName,
        timeMax: time, 
        url: vidUrl,       
    });
    setTimeout(sendMessage, x*1000);
}
