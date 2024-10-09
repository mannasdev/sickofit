function shouldMuteVideo() {
  const videoId = new URLSearchParams(window.location.search).get('v');
  const videosToMute = ['tXEPbotEjZE', 'At8v_Yc044Y'];
  return videosToMute.includes(videoId);
}

function muteVideo() {
  const video = document.querySelector('video');
  if (video) {
    video.muted = true;
    console.log('Video muted');
  }
}

function handleVideoState() {
  if (shouldMuteVideo()) {
    muteVideo();
  }
}

handleVideoState();

const observer = new MutationObserver(() => {
  handleVideoState();
});

const config = { childList: true, subtree: true };
observer.observe(document.body, config);
