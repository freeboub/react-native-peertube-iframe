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
  setResolutionScript: index => {
    return `player.setResolution(${index}); true;`;
  },
  setRate: playbackRate => {
    console.log('*********** setPlaybackRate', playbackRate);
    return `player.setPlaybackRate(${playbackRate}); true;`;
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

export const MAIN_SCRIPT = (videoUrl, allowWebViewZoom, contentScale) => {
  // _s postfix to refer to "safe"
  const videoUrl_s = videoUrl || '';
  const contentScale_s = typeof contentScale === 'number' ? contentScale : 1.0;

  // scale will either be "initial-scale=1.0"
  let scale = `initial-scale=${contentScale_s}`;
  if (!allowWebViewZoom) {
    // or "initial-scale=0.8, maximum-scale=1.0"
    scale += `, maximum-scale=${contentScale_s}`;
  }

  const safeData = {
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
      .peertube-player {
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
    <iframe class="peertube-player" allow="fullscreen" style="border: 0; width: 100%; height: 100%; padding:0px; margin:0px" type="text/html"  frameborder="0" src="${videoUrl_s}"></iframe>
    <script>
      const PeerTubePlayer = window['PeerTubePlayer']
      let player = new PeerTubePlayer(document.querySelector('iframe'))

      window.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'playerReady'}))

      player.addEventListener('playbackStatusUpdate', onPlayerStateChange)
      player.addEventListener('playbackStatusChange', onPlayerStateChange)
      player.addEventListener('resolutionUpdate', onPlaybackQualityChange)
      //player.addEventListener('volumeChange', onPlayerStateChange)

      // FIXME not available, to be reported as a CR...
      function onPlaybackRateChange(event) {
        window.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'playbackRateChange', data: event.data}))
      }

      function onPlaybackQualityChange(event) {
        player.getResolutions().then((resolutions) => {
          const resolution = resolutions.find(x => x.active)
          window.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'playerQualityChange', data: {...event.data, ...resolution}}))
        })
      }

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
