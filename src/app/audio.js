var silence = true;

function muteAudio() {

    var allaudio = document.getElementsByTagName('audio');

    if (silence) {
        for (var j = 0; j < allaudio.length; j++) {
            allaudio[j].muted = false;
        }
        document.getElementById("audio-icon").className = 'fa fa-volume-up';
        silence = false;
    }
    else {
        for (var j = 0; j < allaudio.length; j++) {
            allaudio[j].muted = true;
        }
        document.getElementById("audio-icon").className = 'fa fa-volume-off';
        silence = true;
    }
};