const video = document.querySelector('[data-tabs="video"]');
const videoPoster = document.querySelector('[data-tabs="video-poster"]');
const videoButton = document.querySelector('[data-tabs="video-button"]');

const onClickVideoButton = () => {
  video.style.display = 'block';
  video.src += '?feature=oembed&autoplay=1';
  videoPoster.style.display = 'none';
  videoButton.style.display = 'none';
};

const addListnerToVideoButton = () => {
  videoButton.addEventListener('click', onClickVideoButton);
};

const runVideo = () => {
  addListnerToVideoButton();
};

export { runVideo };
