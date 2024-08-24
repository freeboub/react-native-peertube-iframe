import React, {
  useRef,
  useMemo,
  useState,
  useEffect,
  forwardRef,
  useCallback,
  useImperativeHandle,
} from 'react';
import {Linking, Platform, StyleSheet, View} from 'react-native';
import {EventEmitter} from 'events';
import {WebView} from './WebView';
import {PLAYER_STATES, CUSTOM_USER_AGENT} from './constants';
import {playMode, MAIN_SCRIPT, PLAYER_FUNCTIONS} from './PlayerScripts';

const PeertubeIframe = (props, ref) => {
  const {
    height,
    width,
    play = false,
    viewContainerStyle,
    webViewStyle,
    webViewProps,
    videoUrl,
    contentScale = 1.0,
    volume = 100,
    playbackRate = 1,
    playbackQuality = -1,
    onReady = _event => {},
    initialPlayerParams = {},
    allowWebViewZoom = false,
    forceAndroidAutoplay = false,
    onChangeState = _event => {},
    onFullScreenChange = _status => {},
    onPlaybackQualityChange = _quality => {},
    onPlaybackRateChange = _playbackRate => {},
    onChangeDuration = _duration => {},
    onChangePosition = _position => {},
    onChangeVolume = _volume => {},
  } = props;

  const initialPlayerParamsRef = useRef(initialPlayerParams || {});

  const webViewRef = useRef(null);
  const eventEmitter = useRef(new EventEmitter());
  const playbackDataStateRef = useRef(PLAYER_STATES.unstarted);
  const playbackDataDurationRef = useRef(0);
  const playbackDataPositionRef = useRef(0);
  const playbackDataVolumeRef = useRef(initialPlayerParams.muted ? 0 : 1);

  const playbackRateRef = useRef(initialPlayerParams.rate);

  useImperativeHandle(
    ref,
    () => ({
      getDuration: () => {
        return new Promise(resolve => {
          resolve(playbackDataDurationRef.current);
        });
      },
      getCurrentTime: () => {
        return new Promise(resolve => {
          resolve(playbackDataPositionRef.current);
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
          resolve(playbackRateRef.current);
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
      getAvailableCaption: () => {
        webViewRef.current?.injectJavaScript(
          PLAYER_FUNCTIONS.getAvailableCaptionScript,
        );
        return new Promise(resolve => {
          eventEmitter.current.once('getAvailableCaption', resolve);
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
      seekTo: seconds => {
        webViewRef.current?.injectJavaScript(
          PLAYER_FUNCTIONS.seekToScript(seconds),
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
      setVolume: newVolume => {
        webViewRef.current?.injectJavaScript(
          PLAYER_FUNCTIONS.setVolume(newVolume),
        );
      },
      setCaption: id => {
        webViewRef.current?.injectJavaScript(PLAYER_FUNCTIONS.setCaption(id));
      },
    }),
    [],
  );

  useEffect(() => {
    webViewRef.current?.injectJavaScript(playMode[play]);
  }, [play]);

  useEffect(() => {
    webViewRef.current?.injectJavaScript(PLAYER_FUNCTIONS.setVolume(volume));
  }, [volume]);

  useEffect(() => {
    webViewRef.current?.injectJavaScript(
      PLAYER_FUNCTIONS.setRate(playbackRate),
    );
  }, [playbackRate]);

  useEffect(() => {
    webViewRef.current?.injectJavaScript(
      PLAYER_FUNCTIONS.setResolutionScript(playbackQuality),
    );
  }, [playbackQuality]);

  const updateInitialState = useCallback(() => {
    [
      playMode[play],
      PLAYER_FUNCTIONS.setVolume(volume),
      PLAYER_FUNCTIONS.setRate(playbackRate),
      PLAYER_FUNCTIONS.setResolutionScript(playbackQuality),
    ].forEach(webViewRef.current?.injectJavaScript);
  }, [play, playbackQuality, playbackRate, volume]);

  const updatePlayerState = useCallback(
    newState => {
      if (typeof newState !== 'object') {
        return;
      }

      if (newState.playbackState !== playbackDataStateRef.current) {
        onChangeState(
          PLAYER_STATES[newState.playbackState] || PLAYER_STATES[newState],
        );
        playbackDataStateRef.current = newState.playbackState;
      }
      if (newState.duration !== playbackDataDurationRef.current) {
        onChangeDuration(newState.duration);
        playbackDataDurationRef.current = newState.duration;
      }
      if (newState.position !== playbackDataPositionRef.current) {
        onChangePosition(newState.position);
        playbackDataPositionRef.current = newState.position;
      }
      if (newState.volume !== playbackDataVolumeRef.current) {
        onChangeVolume(newState.volume);
        playbackDataVolumeRef.current = newState.volume;
      }
    },
    [onChangeDuration, onChangePosition, onChangeState, onChangeVolume],
  );

  const onWebMessage = useCallback(
    event => {
      try {
        const message = JSON.parse(event.nativeEvent.data);
        switch (message.eventType) {
          case 'fullScreenChange':
            onFullScreenChange(message.data);
            break;
          case 'playerStateChange':
            updatePlayerState(message.data);
            break;
          case 'playerReady':
            updateInitialState();
            onReady();
            break;
          case 'playerQualityChange':
            onPlaybackQualityChange(message.data);
            break;
          case 'playbackRateChange':
            playbackRateRef.current = message.data;
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
      updateInitialState,
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
    if (initialPlayerParams) {
      applyIfNeeded('start', initialPlayerParams.start);
      applyIfNeeded('stop', initialPlayerParams.stop);
      applyIfNeeded('controls', initialPlayerParams.controls);
      applyIfNeeded('controlBar', initialPlayerParams.controlBar);
      applyIfNeeded('peertubeLink', initialPlayerParams.peertubeLink);
      applyIfNeeded('muted', initialPlayerParams.muted);
      applyIfNeeded('loop', initialPlayerParams.loop);
      applyIfNeeded('subtitle', initialPlayerParams.subtitle);
      applyIfNeeded('autoplay', initialPlayerParams.autoplay);
      applyIfNeeded('playbackRate', initialPlayerParams.playbackRate);
      applyIfNeeded('title', initialPlayerParams.title);
      applyIfNeeded('warningTitle', initialPlayerParams.warningTitle);
      applyIfNeeded('p2p', initialPlayerParams.p2p);
      applyIfNeeded(
        'bigPlayBackgroundColor',
        initialPlayerParams.bigPlayBackgroundColor,
      );
      applyIfNeeded('foregroundColor', initialPlayerParams.foregroundColor);
      applyIfNeeded('mode', initialPlayerParams.mode);
      applyIfNeeded(
        'waitPasswordFromEmbedAPI',
        initialPlayerParams.waitPasswordFromEmbedAPI,
      );
    }
    videoUrlSafe.searchParams.append('api', '1');

    const vidUrl = videoUrlSafe.href.replace(videoUrl + '/', videoUrl);
    const peertubeScript = MAIN_SCRIPT(vidUrl, allowWebViewZoom, contentScale);

    const res = {html: peertubeScript.htmlString, videoUrl: vidUrl};
    return res;
  }, [allowWebViewZoom, contentScale, videoUrl, initialPlayerParams]);

  return (
    <View style={[{height, width}, viewContainerStyle]}>
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
            ? Platform.select({android: CUSTOM_USER_AGENT, ios: ''})
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
  webView: {backgroundColor: 'transparent'},
});

export default forwardRef(PeertubeIframe);
