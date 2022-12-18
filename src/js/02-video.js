import Player from "@vimeo/player";
import throttle from "lodash.throttle";
// import Player from "@vimeo/player";
// import throttle from "lodash.throttle";

const iframe = document.querySelector("#vimeo-player");

// const iframe = document.querySelector("#vimeo-plater");

const player = new Player(iframe);

const CURRENT_TIME = "videoplayer-current-time";

// const player = new Player(iframe);

// const CURRENT_TIME = "videoplayer-current-time";
player.on("timeupdate", throttle(getTime, 1000));

// player.on("timeupdate", throttle(timePlay, 1000));

function getTime(data) {
  const dataStringify = JSON.stringify(data.seconds);
  localStorage.setItem(CURRENT_TIME, dataStringify);
}

// function timePlay(data) {
//   localStorage.setItem(CURRENT_TIME, JSON.stringify(data.seconds));
// }

// const previusTime = JSON.parce(localStorage.getItem(CURRENT_TIME));

const previusTime = JSON.parse(localStorage.getItem(CURRENT_TIME));
// const previusTime = JSON.parse(localStorage.getItem(CURRENT_TIME));

player.setCurrentTime(previusTime || 0);

// player.setCurrentTime(previusTime || 0);

// function continuePlay() {}
// const player = new Player("handstick", {
//   id: 19231868,
//   width: 640,
// });

// player.on("play", function () {
//   console.log("played the video!");
// });
