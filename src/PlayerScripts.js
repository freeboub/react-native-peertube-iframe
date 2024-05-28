import {MUTE_MODE, PAUSE_MODE, PLAY_MODE, UNMUTE_MODE} from './constants';

export const PLAYER_FUNCTIONS = {
  // muteVideo: 'player.mute(); true;',
  // unMuteVideo: 'player.unMute(); true;',
  playVideo: 'player.play(); true;',
  pauseVideo: 'player.pause(); true;',
  isMutedScript: `
player.getVolume().then((volume) => {
   window.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'isMuted', data: volume === 0}));
});
true;
`,
  getVolumeScript: `
player.getVolume().then((volume) => {
 window.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'getVolume', data: volume}));
});
true;
`,
  getPlaybackRateScript: `
player.getPlaybackRate().then((rate) => {
 window.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'getPlaybackRate', data: rate}));
});
true;
`,
  getAvailablePlaybackRatesScript: `
player.getPlaybackRates().then(rates => {
 window.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'getAvailablePlaybackRates', data: rates}));
});
true;
`,
  getAvailablePlaybackQualitiesScript: `
player.getResolutions().then(resolutions => {
 window.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'getAvailablePlaybackQualities', data: resolutions}));
});
true;
`,
  setVolume: volume => {
    return `player.setVolume(${volume}); true;`;
  },

  seekToScript: (seconds, allowSeekAhead) => {
    return `player.seek(${seconds}, ${allowSeekAhead}); true;`;
  },

  setPlaybackRate: playbackRate => {
    return `player.setPlaybackRate(${playbackRate}); true;`;
  },

  setPlaybackQuality: playbackQuality => {
    return `player.setPlaybackQuality(${playbackQuality}); true;`;
  },

  loadPlaylist: (playList, startIndex, play) => {
    const index = startIndex || 0;
    const func = play ? 'loadPlaylist' : 'cuePlaylist';

    const list = typeof playList === 'string' ? `"${playList}"` : 'undefined';
    const listType =
      typeof playList === 'string' ? `"${playlist}"` : 'undefined';
    const playlist = Array.isArray(playList)
      ? `"${playList.join(',')}"`
      : 'undefined';

    return `player.${func}({listType: ${listType}, list: ${list}, playlist: ${playlist}, index: ${index}}); true;`;
  },

  loadVideoById: (videoUrl, play) => {
    const func = play ? 'loadVideoById' : 'cueVideoById';

    return `player.${func}({videoUrl: ${JSON.stringify(videoUrl)}}); true;`;
  },
};

export const playMode = {
  [PLAY_MODE]: PLAYER_FUNCTIONS.playVideo,
  [PAUSE_MODE]: PLAYER_FUNCTIONS.pauseVideo,
};

export const soundMode = {
  [MUTE_MODE]: PLAYER_FUNCTIONS.muteVideo,
  [UNMUTE_MODE]: PLAYER_FUNCTIONS.unMuteVideo,
};

export const MAIN_SCRIPT = (
  videoUrl,
  playList,
  allowWebViewZoom,
  contentScale,
) => {
  // _s postfix to refer to "safe"
  const videoUrl_s = videoUrl || '';
  const contentScale_s = typeof contentScale === 'number' ? contentScale : 1.0;

  const list = typeof playList === 'string' ? playList : undefined;
  const listType = typeof playList === 'string' ? 'playlist' : undefined;
  const playlist = Array.isArray(playList) ? playList.join(',') : undefined;

  // scale will either be "initial-scale=1.0"
  let scale = `initial-scale=${contentScale_s}`;
  if (!allowWebViewZoom) {
    // or "initial-scale=0.8, maximum-scale=1.0"
    scale += `, maximum-scale=${contentScale_s}`;
  }

  const safeData = {
    list,
    listType,
    playlist,
    videoUrl_s,
    contentScale_s,
    allowWebViewZoom,
  };

  const urlEncodedJSON = encodeURI(JSON.stringify(safeData));

  const htmlString = `
<!DOCTYPE html>
<html>
  <head>
    <meta
      name="viewport"
      content="width=device-width, ${scale}"
    >
    <style>
      body {
        margin: 0;
      }
      .container {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 56.25%;
      }
      .video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
      }
    </style>
  </head>
  <script src="https://unpkg.com/@peertube/embed-api/build/player.min.js"></script>
    
  <body>
    <iframe src="${videoUrl_s}"></iframe>
    <script>
      // require('events').EventEmitter.prototype._maxListeners = 100;
      const PeerTubePlayer = window['PeerTubePlayer']

      console.log('PeerTubePlayer player', PeerTubePlayer)

      let player = new PeerTubePlayer(document.querySelector('iframe'))
      console.log('PeerTubePlayer', 'ici la', player)

      window.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'playerReady'}))

      player.addEventListener('playbackStatusUpdate', onPlayerStateChange)
      player.addEventListener('playbackStatusChange', onPlayerStateChange)
      player.addEventListener('resolutionUpdate', onPlaybackQualityChange)
      //player.addEventListener('volumeChange', onPlayerStateChange)

      function onPlaybackRateChange(event) {
        window.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'playbackRateChange', data: event.data}))
      }

      function onPlaybackQualityChange(event) {
        console.log('playerQualityChange ICI', JSON.stringify(event))

        window.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'playerQualityChange', data: event.data}))
      }

      function onPlayerReady(event) {
        window.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'playerReady'}))
      }

      var done = false;
      function onPlayerStateChange(event) {  
        window.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'playerStateChange', data: event}))
      }

      var isFullScreen = false;
      function onFullScreenChange() {
        isFullScreen = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
        window.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'fullScreenChange', data: Boolean(isFullScreen)}));
      }

      document.addEventListener('fullscreenchange', onFullScreenChange)
      document.addEventListener('mozfullscreenchange', onFullScreenChange)
      document.addEventListener('msfullscreenchange', onFullScreenChange)
      document.addEventListener('webkitfullscreenchange', onFullScreenChange)
    </script>
  </body>
</html>
`;
  return {htmlString, urlEncodedJSON};
};
