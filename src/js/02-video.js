import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const keyCurrentTime = 'videoplayer-current-time';

// localStorage.clear();

player.on('timeupdate', throttle(onSetTimeupdate, 500));

function onSetTimeupdate(data) {
  console.log('data.seconds: ', data.seconds);
  localStorage.setItem(keyCurrentTime, data.seconds);
}

// Вариант проверки через if
if (localStorage.getItem(keyCurrentTime)) {
  player.setCurrentTime(localStorage.getItem(keyCurrentTime));
}

// Вариант проверки через try...catch   НЕ ПРАЦЮЄ
// try {
//   if (localStorage.getItem(keyCurrentTime)) {
//     player.setCurrentTime(localStorage.getItem(keyCurrentTime));
//   }
// } catch (error) {
//   console.log('Нулевая секунда');
//   console.log('error.name: ', error.name);
//   console.log('error.message: ', error.message);
// }
