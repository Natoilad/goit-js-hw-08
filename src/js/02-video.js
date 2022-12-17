import Player from "@vimeo/player";
import { throttle } from "lodash";

const currentTime = "videoplayer - current - time";

const iframe = document.querySelector("iframe");
const iframePlayer = new Vimeo.Player(iframe);

const onPlay = function (data) {
  // data is an object containing properties specific to that event
  const dataStringify = JSON.stringify(data);
  localStorage.setItem(currentTime, dataStringify);
};

player.on(timeupdate, _throttle(onPlay, 1000));

const player = new Player("handstick", {
  id: 19231868,
  width: 640,
});

player.on("play", function () {
  console.log("played the video!");
});
