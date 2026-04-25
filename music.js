// Music Player - La Incondicional (Luis Miguel)
(function () {
  var isPlaying = false;
  var player = null;
  var btn = document.getElementById('music-btn');
  var icon = document.getElementById('music-icon');

  // Cargar la YouTube IFrame API
  var tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  document.head.appendChild(tag);

  window.onYouTubeIframeAPIReady = function () {
    player = new YT.Player('yt-iframe', {
      events: {
        onReady: function () {
          // Listo para reproducir al hacer click
        },
        onStateChange: function (e) {
          if (e.data === YT.PlayerState.ENDED) {
            player.playVideo(); // loop manual por si acaso
          }
        }
      }
    });
  };

  btn.addEventListener('click', function () {
    if (!player) return;
    if (isPlaying) {
      player.pauseVideo();
      isPlaying = false;
      btn.classList.remove('playing');
      icon.textContent = '♪';
    } else {
      player.playVideo();
      isPlaying = true;
      btn.classList.add('playing');
      icon.textContent = '♬';
    }
  });
})();
