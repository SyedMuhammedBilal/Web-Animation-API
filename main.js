var sceneryFrames = [
    { transform: 'translateX(100%)' },
    { transform: 'translateY(-100%)' }
];

var sceneryTiming = {
    duration: 36000,
    iterations: Infinity,
    playbackRate: -2
};

var background = document.getElementById("night");
var backgroundMovement = background.animate(sceneryFrames, sceneryTiming);

backgroundMovement.currentTime = backgroundMovement.effect.getTiming().duration / 2