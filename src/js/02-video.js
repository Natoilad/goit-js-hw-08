import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector("#vimeo-player");

const player = new Player(iframe);

const CURRENT_TARGET_TIME = "videoplayer-current-time";

try {
  const previusTime = JSON.parse(localStorage.getItem(CURRENT_TARGET_TIME));
  player.setCurrentTime(previusTime || 0);
} catch (error) {
  console.log("Error get time");
}

function targetTime(data) {
  // const dataStringify = JSON.stringify(data.seconds);
  localStorage.setItem(CURRENT_TARGET_TIME, data.seconds);
}

player.on("timeupdate", throttle(targetTime, 1000));
