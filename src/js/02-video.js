import Player from "@vimeo/player";
// import { throttle } from "lodash";

const currentTime = "videoplayer - current - time";

const iframe = document.querySelector("iframe");
const iframePlayer = new Vimeo.Player(iframe);

const player = new Player("handstick", {
  id: 19231868,
  width: 640,
});

player.on("play", function () {
  console.log("played the video!");
});
