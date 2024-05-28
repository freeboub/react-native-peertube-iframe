import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {WebViewProps} from 'react-native-webview';

export enum PLAYER_STATES {
  ENDED = 'ended',
  PAUSED = 'paused',
  PLAYING = 'playing',
  UNSTARTED = 'unstarted',
}

export interface PeertubePlaybackQuality {
  id: number;
  label: string;
  height: string;
  active: boolean
}
export interface PeertubeIframeRef {
  getDuration: () => Promise<number>;
  getCurrentTime: () => Promise<number>;
  isMuted: () => Promise<boolean>;
  getVolume: () => Promise<number>;
  getPlaybackRate: () => Promise<number>;
  getAvailablePlaybackRates: () => Promise<number[]>;
  getAvailablePlaybackQualities: () => Promise<PeertubePlaybackQuality[]>;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
}

export interface PeertubeIframeUrlParameters {
    start: number | string
    stop: number | string
    controls: number | string
    controlBar: number | string
    peertubeLink: number | string
    muted: number | string
    loop: number | string
    subtitle: string
    autoplay: number | string
    playbackRate: number | string
    title: number | string
    warningTitle: number | string
    p2p: number | string
    bigPlayBackgroundColor: string
    foregroundColor: string
    mode: string
    waitPasswordFromEmbedAPI: number | string
}

// FIXME
export interface InitialPlayerParams {
  loop?: boolean;
  controls?: boolean;
  cc_lang_pref?: string;
  showClosedCaptions?: boolean;
  color?: string;
  start?: Number;
  end?: Number;
  preventFullScreen?: boolean;
  playerLang?: String;
  iv_load_policy?: Number;
  /** 
   * @deprecated - This parameter has no effect since August 15, 2023
   * https://developers.google.com/peertube/player_parameters#modestbranding
   */
  deprecated?: boolean;
  rel?: boolean;
}

export interface PeertubeIframeProps {
  /**
   * height of the webview container
   *
   * Note: Embedded players must have a viewport that is at least 200px by 200px. If the player displays controls, it must be large enough to fully display the controls without shrinking the viewport below the minimum size. We recommend 16:9 players be at least 480 pixels wide and 270 pixels tall.
   */
  height: number;
  /**
   * width of the webview container
   *
   * Note: Embedded players must have a viewport that is at least 200px by 200px. If the player displays controls, it must be large enough to fully display the controls without shrinking the viewport below the minimum size. We recommend 16:9 players be at least 480 pixels wide and 270 pixels tall.
   */
  width?: number;
  /**
   * Specifies the Peertube Video Url of the video to be played.
   */
  videoUrl?: string;
  /**
   * Specifies the playlist to play. It can be either the playlist ID or a list of video IDs
   *
   * @example
   * playList={'PLbpi6ZahtOH6Blw3RGYpWkSByi_T7Rygb'}
   *
   * @example
   * playList={['QRt7LjqJ45k', 'fHsa9DqmId8']}
   */
  playList?: Array<string> | string;
  /**
   * Flag to tell the player to play or pause the video.
   */
  play?: boolean;

  /**
   * Flag to tell the player to mute the video.
   */
  mute?: boolean;
  /**
   * Sets the volume. Accepts an integer between `0` and `100`.
   */
  volume?: number;
  /**
   * A style prop that will be given to the webview container
   */
  viewContainerStyle?: StyleProp<ViewStyle>;
  /**
   * A style prop that will be given to the webview
   */
  webViewStyle?: StyleProp<ViewStyle>;
  /**
   * Props that are supplied to the underlying webview (react-native-webview). A full list of props can be found [here](https://github.com/react-native-community/react-native-webview/blob/master/docs/Reference.md#props-index)
   */
  webViewProps?: WebViewProps;
  /**
   * This sets the suggested playback rate for the current video. If the playback rate changes, it will only change for the video that is already cued or being played.
   */
  playbackRate?: number;
/**
 * this select video track to playback. -1 will enable automatic selection 
 */
  playbackQuality?: number;
  /**
   * This event fires whenever a player has finished loading and is ready.
   */
  onReady?: () => void;
  /**
   * Starts the playlist from the given index
   *
   * Works only if the playlist is a list of video IDs.
   */
  playListStartIndex?: number;
  initialPlayerParams?: InitialPlayerParams;
  /**
   * Changes user string to make autoplay work on the iframe player for some android devices.
   */
  forceAndroidAutoplay?: boolean;
  /**
   * callback for when the player's state changes.
   */
  onChangeState?: (event: PLAYER_STATES) => void;
  /**
   * callback for when the fullscreen option is clicked in the player. It signals the new fullscreen state of the player.
   */
  onFullScreenChange?: (status: boolean) => void;
  /**
   * callback for when the video playback quality changes. It might signal a change in the viewer's playback environment.
   */
  onPlaybackQualityChange?: (quality: string) => void;
  /**
   * callback for when the video playback rate changes.
   */
  onPlaybackRateChange?: (event: string) => void;
  /**
   * Flag to decide whether or not a user can zoom the video webview.
   */
  allowWebViewZoom?: boolean;
  /**
   * Set this React Ref to use ref functions such as getDuration.
   */
  ref?: React.MutableRefObject<PeertubeIframeRef | null>;
  /**
   * scale factor for initial-scale and maximum-scale in
   * <meta /> tag on the webpage
   */
  contentScale?: number;

  videoUrlParameters: PeertubeIframeUrlParameters;
}

declare const PeertubeIframe: React.VFC<PeertubeIframeProps>;

export default PeertubeIframe;
