function SimpleVideoListPlayer(videoElement) {
	this.index = 0;
	this.videoElement = videoElement;

	this.videoEnded = function (event) {
		this.index++;
		if (this.index >= config.videoList.length) this.index = 0;
		this.videoPlay();
	};

	this.videoPlay = function () {
		console.log('play: ' + config.videoRoot + config.videoList[this.index]);
		this.videoElement.src = config.videoRoot + config.videoList[this.index];
		this.videoElement.play();
	};

	this.initVideoPlayer = function () {
		if (config.videoList.length <= 1) {
			this.videoElement.loop = true;
		} else {
			this.videoElement.addEventListener('ended', this.videoEnded.bind(this), false);
		}
		this.videoPlay();
	};

	this.initVideoPlayer();
}

new SimpleVideoListPlayer(document.getElementById("videoElement"));