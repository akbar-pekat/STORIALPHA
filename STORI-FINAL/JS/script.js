var pos = 0, type, msg;
var ttc1 = $("#ttc1");
var ttc2 = $("#ttc2");
var tnc = $("#tnc");

var notifElement = document.createElement('audio');
notifElement.setAttribute('src', 'MP3/notification1.mp3');

$("#ttc2").css("display", "none");
$("#tnc").css("display", "none");

function taptochat1() {
  type = dialogs[pos][0];
  message = dialogs[pos][1];
  time = dialogs[pos][2];
  if (type>="right") {
    notifElement.play();
  } else if (type>="left") {
    notifElement.play();
  } else {
    notifElement.pause();
  }
  $("#ttc1").css("display", "none");
  $("#ttc2").css("display", "block");
  document.getElementById("chat").innerHTML += "<li class='message-"+type+"' style='display: list-item;'><div class='messageinner-ms1'><span class='message-text'>"+message+"</span><span class='message-time'>"+time+"</span></div></li>";
  setTimeout(function(){
    notifElement.pause();
    notifElement.currentTime = 0;
  }, 1000);
}

function taptochat2() {
  if (pos>=dialogs.length-1) {
    $("#ttc2").css("display", "none");
    $("#tnc").css("display", "block");
    return false;
  };
  pos=pos+1
  type = dialogs[pos][0];
  message = dialogs[pos][1];
  time = dialogs[pos][2];
  document.getElementById("chat").innerHTML += "<li class='message-"+type+"' style='display: list-item;'><div class='messageinner-ms1'><span class='message-text'>"+message+"</span><span class='message-time'>"+time+"</span></div></li>";
  notifElement.play();
  $(".chat-container").scrollTop($(".chat-container")[0].scrollHeight);
  setTimeout(function(){
    notifElement.pause();
    notifElement.currentTime = 0;
  }, 1000);
};

function tapnextchap() {
  window.location.replace("https://forms.gle/kczVxWiTyaM8WfWS7");
}
