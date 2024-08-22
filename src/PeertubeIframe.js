import React, {
  useRef,
  useMemo,
  useState,
  useEffect,
  forwardRef,
  useCallback,
  useImperativeHandle,
} from 'react';
import { Linking, Platform, StyleSheet, View } from 'react-native';
import { EventEmitter } from 'events';
import { WebView } from './WebView';
import { PLAYER_STATES, CUSTOM_USER_AGENT } from './constants';
import {
  playMode,
  soundMode,
  MAIN_SCRIPT,
  PLAYER_FUNCTIONS,
} from './PlayerScripts';

const PeertubeIframe = (props, ref) => {
  const {
    height,
    width,
    play = false,
    mute = false,
    volume = 100,
    viewContainerStyle,
    webViewStyle,
    webViewProps,
    videoUrl,
    playbackRate = 1,
    contentScale = 1.0,
    onReady = _event => { },
    initialPlayerParams,
    allowWebViewZoom = false,
    forceAndroidAutoplay = false,
    onChangeState = _event => { },
    onFullScreenChange = _status => { },
    onPlaybackQualityChange = _quality => { },
    onPlaybackRateChange = _playbackRate => { },
    playbackQuality = -1,
    videoUrlParameters = {},
  } = props;

  const [playerReady, setPlayerReady] = useState(false);
  const initialPlayerParamsRef = useRef(initialPlayerParams || {});

  const webViewRef = useRef(null);
  const eventEmitter = useRef(new EventEmitter());
  const playbackDataRef = useRef({});

  useImperativeHandle(
    ref,
    () => ({
      getDuration: () => {
        return new Promise(resolve => {
          resolve(playbackDataRef.current.duration);
        });
      },
      getCurrentTime: () => {
        return new Promise(resolve => {
          resolve(playbackDataRef.current.position);
        });
      },
      isMuted: () => {
        webViewRef.current?.injectJavaScript(PLAYER_FUNCTIONS.isMutedScript);
        return new Promise(resolve => {
          eventEmitter.current.once('isMuted', resolve);
        });
      },
      getVolume: () => {
        webViewRef.current?.injectJavaScript(PLAYER_FUNCTIONS.getVolumeScript);
        return new Promise(resolve => {
          eventEmitter.current.once('getVolume', resolve);
        });
      },
      getPlaybackRate: () => {
        webViewRef.current?.injectJavaScript(
          PLAYER_FUNCTIONS.getPlaybackRateScript,
        );
        return new Promise(resolve => {
          eventEmitter.current.once('getPlaybackRate', resolve);
        });
      },
      getAvailablePlaybackRates: () => {
        webViewRef.current?.injectJavaScript(
          PLAYER_FUNCTIONS.getAvailablePlaybackRatesScript,
        );
        return new Promise(resolve => {
          eventEmitter.current.once('getAvailablePlaybackRates', resolve);
        });
      },
      getAvailablePlaybackQualities: () => {
        webViewRef.current?.injectJavaScript(
          PLAYER_FUNCTIONS.getAvailablePlaybackQualitiesScript,
        );
        return new Promise(resolve => {
          eventEmitter.current.once('getAvailablePlaybackQualities', resolve);
        });
      },
      seekTo: (seconds, allowSeekAhead) => {
        webViewRef.current?.injectJavaScript(
          PLAYER_FUNCTIONS.seekToScript(seconds, allowSeekAhead),
        );
      },
      setResolution: index => {
        webViewRef.current?.injectJavaScript(
          PLAYER_FUNCTIONS.setResolutionScript(index),
        );
      },
      setRate: rate => {
        webViewRef.current?.injectJavaScript(PLAYER_FUNCTIONS.setRate(rate));
      },
    }),
    [],
  );

  useEffect(() => {
    if (!playerReady) {
      // no instance of player is ready
      return;
    }

    [
      playMode[play],
      soundMode[mute],
      PLAYER_FUNCTIONS.setVolume(volume),
      PLAYER_FUNCTIONS.setRate(playbackRate),
      PLAYER_FUNCTIONS.setResolutionScript(playbackQuality),
    ].forEach(webViewRef.current?.injectJavaScript);
  }, [play, mute, volume, playbackRate, playerReady, playbackQuality]);

  const updatePlayerState = useCallback(
    newState => {
      if (typeof newState !== 'object') {
        return;
      }

      if (newState.playbackState !== playbackDataRef.current.playbackState) {
        console.log('newState.playbackState', newState);
        onChangeState(
          PLAYER_STATES[newState.playbackState] || PLAYER_STATES[newState],
        );
      }
      playbackDataRef.current = newState;
    },
    [onChangeState],
  );

  const onWebMessage = useCallback(
    event => {
      console.log('onWebMessage', event.nativeEvent.data);
      try {
        const message = JSON.parse(event.nativeEvent.data);
        //console.log('onWebMessage', message.eventType, message.data);

        switch (message.eventType) {
          case 'fullScreenChange':
            onFullScreenChange(message.data);
            break;
          case 'playerStateChange':
            updatePlayerState(message.data);
            break;
          case 'playerReady':
            onReady();
            setPlayerReady(true);
            break;
          case 'playerQualityChange':
            console.log('onPlaybackQualityChange !!!! ', event);
            onPlaybackQualityChange(message.data);
            break;
          case 'playbackRateChange':
            onPlaybackRateChange(message.data);
            break;
          default:
            eventEmitter.current.emit(message.eventType, message.data);
            break;
        }
      } catch (error) {
        console.warn('[rn-peertube-iframe]', error);
      }
    },
    [
      onFullScreenChange,
      updatePlayerState,
      onReady,
      onPlaybackQualityChange,
      onPlaybackRateChange,
    ],
  );

  const onShouldStartLoadWithRequest = useCallback(
    request => {
      try {
        const url = request.mainDocumentURL || request.url;
        if (Platform.OS === 'ios') {
          const iosFirstLoad = url === 'about:blank';
          if (iosFirstLoad) {
            return true;
          }
          Linking.openURL(url).catch(error => {
            console.warn('Error opening URL:', error);
          });
          return false;
        }
        return url.startsWith(videoUrl);
      } catch (error) {
        // defaults to true in case of error
        // returning false stops the video from loading
        return true;
      }
    },
    [videoUrl],
  );

  const source = useMemo(() => {
    const videoUrlSafe = new URL(videoUrl);
    const applyIfNeeded = (key, value) => {
      if (value !== undefined) {
        videoUrlSafe.searchParams.append(key, value);
      }
    };
    if (videoUrlParameters) {
      applyIfNeeded('start', videoUrlParameters.start);
      applyIfNeeded('stop', videoUrlParameters.stop);
      applyIfNeeded('controls', videoUrlParameters.controls);
      applyIfNeeded('controlBar', videoUrlParameters.controlBar);
      applyIfNeeded('peertubeLink', videoUrlParameters.peertubeLink);
      applyIfNeeded('muted', videoUrlParameters.muted);
      applyIfNeeded('loop', videoUrlParameters.loop);
      applyIfNeeded('subtitle', videoUrlParameters.subtitle);
      applyIfNeeded('autoplay', videoUrlParameters.autoplay);
      applyIfNeeded('playbackRate', videoUrlParameters.playbackRate);
      applyIfNeeded('title', videoUrlParameters.title);
      applyIfNeeded('warningTitle', videoUrlParameters.warningTitle);
      applyIfNeeded('p2p', videoUrlParameters.p2p);
      applyIfNeeded(
        'bigPlayBackgroundColor',
        videoUrlParameters.bigPlayBackgroundColor,
      );
      applyIfNeeded('foregroundColor', videoUrlParameters.foregroundColor);
      applyIfNeeded('mode', videoUrlParameters.mode);
      applyIfNeeded(
        'waitPasswordFromEmbedAPI',
        videoUrlParameters.waitPasswordFromEmbedAPI,
      );
    }
    videoUrlSafe.searchParams.append('api', '1');

    const vidUrl = videoUrlSafe.href.replace(videoUrl + '/', videoUrl);
    console.log('url', vidUrl);
    const peertubeScript = MAIN_SCRIPT(
      vidUrl,
      //      initialPlayerParamsRef.current,
      allowWebViewZoom,
      contentScale,
    );

    const res = { html: peertubeScript.htmlString, videoUrl: vidUrl };
    return res;
  }, [allowWebViewZoom, contentScale, videoUrl, videoUrlParameters]);

  return (
    <View style={[{ height, width }, viewContainerStyle]}>
      <WebView
        bounces={false}
        originWhitelist={['*']}
        allowsInlineMediaPlayback
        style={[styles.webView, webViewStyle]}
        mediaPlaybackRequiresUserAction={false}
        onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
        allowsFullscreenVideo={
          !initialPlayerParamsRef.current.preventFullScreen
        }
        userAgent={
          forceAndroidAutoplay
            ? Platform.select({ android: CUSTOM_USER_AGENT, ios: '' })
            : ''
        }
        // props above this are override-able

        // --
        {...webViewProps}
        // --

        // add props that should not be allowed to be overridden below
        source={source}
        ref={webViewRef}
        onMessage={onWebMessage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  webView: { backgroundColor: 'transparent' },
});

export default forwardRef(PeertubeIframe);
