(function () {
    "use strict";
    const isDirect = () =>
      document.querySelector(
        ".vjs-source-selector li.vjs-selected .vjs-menu-item-text"
      ).textContent == "Direct stream";
    function wfke(selector, callback) {
      var el = document.querySelector(selector);
      if (el) return callback();
      setTimeout(wfke, 100, selector, callback);
    }
    const awaitVideo = () => wfke("video", awaitPlay);
    const awaitPlay = () => document.querySelector("video")
        .addEventListener("play", () =>
            (document.querySelector(".vjs-source-selector").dataset.source =
              isDirect() ? "direct" : "transcode"),
        );
    PluginApi.Event.addEventListener("stash:location", (e) => {
      if (evt.data.location.pathname.startsWith("/scenes")) awaitVideo();
    });
    if (location.pathname.startsWith("/scenes")) awaitVideo();
  })();
  