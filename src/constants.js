export const PLAY_MODE = true;
export const PAUSE_MODE = false;
export const MUTE_MODE = true;
export const UNMUTE_MODE = false;

export const PLAYER_STATES_NAMES = {
  UNSTARTED: 'unstarted',
  ENDED: 'ended',
  PLAYING: 'playing',
  PAUSED: 'paused',
};

//unstarted, playing, paused or ended

export const PLAYER_STATES = {
  unstarted: PLAYER_STATES_NAMES.UNSTARTED,
  ended: PLAYER_STATES_NAMES.ENDED,
  playing: PLAYER_STATES_NAMES.PLAYING,
  paused: PLAYER_STATES_NAMES.PAUSED,
};

export const CUSTOM_USER_AGENT =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36';
