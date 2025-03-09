self.onmessage = () => {
    const player = new Audio("./audio/playback.m4a");
    player.volume = 0.2;
    player.loop = true;

    player.play().catch(err => {
        console.log("Autoplay bloqueado:", err);
    });
};
