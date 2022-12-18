import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector("#vimeo-player");

const player = new Player(iframe);

const CURRENT_TARGET_TIME = "videoplayer-current-time";

const previusTime = JSON.parse(localStorage.getItem(CURRENT_TARGET_TIME));

function targetTime(data) {
  const dataStringify = JSON.stringify(data.seconds);
  localStorage.setItem(CURRENT_TARGET_TIME, dataStringify);
}

player.on("timeupdate", throttle(targetTime, 1000));

player.setCurrentTime(previusTime || 0);
