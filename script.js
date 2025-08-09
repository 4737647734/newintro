// Wait for page to load
document.addEventListener('DOMContentLoaded', function () {
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    const musicIcon = musicToggle.querySelector('i');
    const musicText = musicToggle.querySelector('span');

    // Update button state based on audio play/pause
    function updateButtonPlaying() {
        musicText.textContent = 'Pause Music';
        musicIcon.classList.remove('fa-play');
        musicIcon.classList.add('fa-pause');
    }

    function updateButtonPaused() {
        musicText.textContent = 'Play Music';
        musicIcon.classList.remove('fa-pause');
        musicIcon.classList.add('fa-play');
    }

    // Toggle music on button click
    musicToggle.addEventListener('click', function () {
        if (bgMusic.paused) {
            bgMusic.play()
                .then(() => {
                    updateButtonPlaying();
                })
                .catch(e => {
                    console.error("Audio play failed:", e);
                    alert("Audio play was blocked by browser. Please try again.");
                });
        } else {
            bgMusic.pause();
            updateButtonPaused();
        }
    });

    // Handle audio ended (optional: restart)
    bgMusic.onended = function () {
        updateButtonPaused();
    };
});
