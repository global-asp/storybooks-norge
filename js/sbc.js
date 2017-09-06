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
