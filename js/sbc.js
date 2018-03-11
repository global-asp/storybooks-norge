document.addEventListener('play', function(e) {
  var audios = document.getElementsByTagName('audio');
  for (var i = 0, len = audios.length; i < len; i++) {
    if (audios[i] != e.target) {
      audios[i].currentTime = 0;
      audios[i].pause();
    }
  }
}, true);

function playpause(n) {
  p = document.getElementById('audio' + n);
  if (p.paused) {
    p.play();
  } else {
    p.pause();
  }
}

function switchlang(d,l) {
  nb = document.getElementsByClassName("nb");
  nn = document.getElementsByClassName("nn");
  def = document.getElementsByClassName("def");
  btn_nb = document.getElementsByClassName("lang-nb");
  btn_nn = document.getElementsByClassName("lang-nn");
  if (d == "no") {
    d = "nb";
  }
  if (l == "no") {
    l = "nb";
  }
  if (l == "nb") {
    for (var i = 0; i < btn_nb.length + 1; i++) {
      nn[i].style.display = "none";
      nb[i].style.display = "block";
      def[i].style.display = "none";
      btn_nb[i].innerHTML = d;
      btn_nn[i].innerHTML = "nn";
      btn_nb[i].setAttribute("onclick", "switchlang('" + d + "','" + d + "')");
      btn_nn[i].setAttribute("onclick", "switchlang('" + d + "','nn')");
    }
  } else if (l == "nn") {
    for (var i = 0; i < btn_nn.length + 1; i++) {
      nb[i].style.display = "none";
      nn[i].style.display = "block";
      def[i].style.display = "none";
      btn_nb[i].innerHTML = "nb";
      btn_nn[i].innerHTML = d;
      btn_nn[i].setAttribute("onclick", "switchlang('" + d + "','" + d + "')");
      btn_nb[i].setAttribute("onclick", "switchlang('" + d + "','nb')");
    }
  } else if (l == d) {
    for (var i = 0; i < btn_nn.length + 1; i++) {
      nb[i].style.display = "none";
      nn[i].style.display = "none";
      def[i].style.display = "block";
      btn_nb[i].innerHTML = "nb";
      btn_nn[i].innerHTML = "nn";
      btn_nb[i].setAttribute("onclick", "switchlang('" + d + "','nb')");
      btn_nn[i].setAttribute("onclick", "switchlang('" + d + "','nn')");
    }
  }
}

function pauseaudio() {
  var sounds = document.getElementsByTagName('audio');
  for (i=0; i<sounds.length; i++) {sounds[i].pause()};
}

function autoplay() {
  pauseaudio();
  var canonical = document.getElementsByTagName("link")[2].href;
  var id = canonical.replace(/.*\/(\d{4})\/.*/, "$1");
  var audio = document.getElementById("audio");
  var index=2;
  function playNext() {
    len = document.getElementsByClassName("img-responsive").length;
    if(index <= len) {
      z = "0";
      if (index > 9) {
        z = "";
      }
      n = z + index.toString();
      p = z + (index - 1).toString();
      if (p == "9") {
        p = "09";
      }
      audio = document.getElementById("audio" + n);
      au_prev = document.getElementById("audio" + p);
      if (p == "01") {
        au_prev = document.getElementById("audio");
      }

      p3 = document.getElementById("text" + p).getElementsByClassName("def")[0].firstChild;
      p3.style = "background-color:#FFFFFF; font-weight:normal; border-radius:0px; padding:0px";
      window.location = "#text" + n;
      h3 = document.getElementById("text" + n).getElementsByClassName("def")[0].firstChild;
      h3.style = "background-color:#FFDC00; font-weight:bold; border-radius:5px; padding:5px";
      audio.load(); audio.play();
      audio.addEventListener('ended', playNext);
      index += 1;
    } else {
      audio.removeEventListener('ended', playNext, false);
    }
  }
  audio.addEventListener('ended', playNext);
  audio.play();
}
