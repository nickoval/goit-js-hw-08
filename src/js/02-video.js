import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const keyCurrentTime = 'videoplayer-current-time';

// localStorage.setItem('vasya', '1000');
// localStorage.clear();
// localStorage.removeItem('vasya');

// player.on('play', function () {
//   // console.log('played the video!');
// });

player.on('timeupdate', throttle(onSetTimeupdate, 500));

function onSetTimeupdate(data) {
  console.log('data.seconds: ', data.seconds);
  localStorage.setItem(keyCurrentTime, data.seconds);
}

// console.log('getItem: ', localStorage.getItem(keyCurrentTime));
if (localStorage.getItem(keyCurrentTime)) {
  player.setCurrentTime(localStorage.getItem(keyCurrentTime));
}
